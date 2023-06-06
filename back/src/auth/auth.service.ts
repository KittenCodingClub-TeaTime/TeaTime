import { PrismaService } from '@/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../shared/dtos/users/create-users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
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
  async signin() {
    return '';
  }
  async signout() {
    return '';
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return hashedPassword;
  }
}
