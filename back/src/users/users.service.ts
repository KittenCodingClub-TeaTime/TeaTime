import { PrismaService } from '@/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from '@shared/dtos/users/create-users.dto';
import { UpdateUserDto } from '@shared/dtos/users/update-users.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const { email, password, name } = createUserDto;
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

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    return hashedPassword;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
