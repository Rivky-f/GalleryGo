import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { EMAIL_STATUS } from '../constants/status.constants';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async checkEmailStatusToRegister(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        photographers: { select: { id: true } },
        clients: { select: { id: true } }
      }
    });
  
    if (!user) {
      return EMAIL_STATUS.NOT_REGISTERED;
    }
  
    const isPhotographer = user.photographers.length > 0;
    const isClient = user.clients.length > 0;
  
    if (isPhotographer) {
      return EMAIL_STATUS.PHOTOGRAPHER;
    }
  
    if (isClient) {
      return EMAIL_STATUS.CLIENT;
    }

    return EMAIL_STATUS.NOT_REGISTERED;
  }

  async create(createUserDto: CreateUserDto) {

    const existingUser = await this.prisma.user.findUnique({ where: { email: createUserDto.email } });
    if (existingUser) throw new ConflictException('משתמש קיים במערכת');

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.prisma.user.create({
      data: { 
        email :createUserDto.email, 
        password: hashedPassword, 
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        phone: createUserDto.phone,
      },
    });
  }

  // async findOne(id: number) {
  //   const user = await this.prisma.user.findUnique({ where: { id } });
  //   if (!user) throw new NotFoundException('User not found');
  //   const { password, ...result } = user;
  //   return result;
  // }

  // async findByEmail(email: string) {
  //   return this.prisma.user.findUnique({ where: { email } });
  // }

  // async findAll() {
  //   return this.prisma.user.findMany({
  //     select: { 
  //       id: true, 
  //       email: true, 
  //       firstName: true,
  //       lastName: true,
  //       isAdmin: true, 
  //       createdAt: true, 
  //       updatedAt: true 
  //     },
  //   });
  // }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   const user = await this.prisma.user.findUnique({ where: { id } });
  //   if (!user) throw new NotFoundException('User not found');

  //   if (updateUserDto.password) {
  //     updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
  //   }

  //   return this.prisma.user.update({
  //     where: { id },
  //     data: updateUserDto,
  //   });
  // }

  // async remove(id: number) {
  //   const user = await this.prisma.user.findUnique({ where: { id } });
  //   if (!user) throw new NotFoundException('User not found');

  //   return this.prisma.user.delete({ where: { id } });
  // }
}
