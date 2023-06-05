import { PrismaService } from '@/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    const { email, password, name } = dto;
    console.log('dto', dto);
    const foundUser = await this.prisma.user.findUnique({ where: { email } });

    if (foundUser) {
      console.log('HERE BITCH');
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
