import { PrismaService } from '@/prisma.service';
import {
  BadRequestException,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { CreateUserDto } from '../../shared/dtos/users/create-users.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from '../utils/constants';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async signup(dto: CreateUserDto) {
    const { email, password, name } = dto;
    const foundUser = await this.prisma.user.findUnique({ where: { email } });

    if (foundUser) {
      throw new BadRequestException('Email already exists');
    }
    try {
      const hashedPassword = await this.hashPassword(password);
      await this.prisma.user.create({
        data: {
          email,
          name,
          hashedPassword,
        },
      });
      return { message: 'User register sucessfully' };
    } catch (error) {
      throw new BadRequestException('Email already exists');
    }
  }

  async signin(
    dto: Pick<CreateUserDto, 'email' | 'password'>,
    req: Request,
    res: Response,
  ) {
    const { email, password } = dto;
    const foundUser = await this.prisma.user.findUnique({ where: { email } });

    if (!foundUser) {
      throw new BadRequestException('Mauvais identifiants');
    }

    const isMatch = await this.comparePassword({
      password,
      hash: foundUser.hashedPassword,
    });

    if (!isMatch) {
      throw new BadRequestException('Mauvais identifiants');
    }

    const token = await this.signToken({
      id: foundUser.id,
      email: foundUser.email,
    });

    if (!token) {
      throw new ForbiddenException();
    }
    res.cookie('token', token);

    return res.send({
      message: 'Logged in successfully',
      body: { email: foundUser.email, name: foundUser.name },
    });
  }

  async signout(req: Request, res: Response) {
    res.clearCookie('token');
    return res.send({ message: 'Logged out successfully' });
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(args: { password: string; hash: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }

  async signToken(args: { id: number; email: string }) {
    const payload = args;

    return this.jwt.signAsync(payload, { secret: jwtSecret, expiresIn: '24h' });
  }

  async authenticate(dto: { token: string }, res: Response) {
    const { token } = dto;
    const userInfos = this.jwt.verify(token, { secret: jwtSecret });
    const foundUser = await this.prisma.user.findUnique({
      where: { email: userInfos.email },
    });

    if (!foundUser) {
      throw new BadRequestException('Veuillez vous reconnecter');
    }

    const userInformations = { email: foundUser.email, name: foundUser.name };

    return res.send({
      message: 'Authenticated',
      body: userInformations,
    });
  }
}
