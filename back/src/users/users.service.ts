import { PrismaService } from '@/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@shared/dtos/users/create-users.dto';
import { UpdateUserDto } from '@shared/dtos/users/update-users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    // this.prisma.user.create({ data: { email: 'test' } })
    // Since id is in autoincrement, and name is facultative, thise is enough to create a new user
    // this.prisma.user.create({ data: createUserDto });
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.prisma.user.findMany({
      select: { id: true, email: true, name: true },
    });
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
