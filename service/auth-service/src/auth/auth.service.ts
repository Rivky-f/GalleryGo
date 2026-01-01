import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  // async register(createUserDto: CreateUserDto) {
  //   const user = await this.usersService.create(createUserDto);
  //   const { password, ...result } = user;
  //   return result;
  // }

  // async login(email: string, password: string) {
  //   const user = await this.usersService.findByEmail(email);
  //   if (!user) throw new UnauthorizedException('Invalid credentials');
    
  //   const passwordMatch = await bcrypt.compare(password, user.password);
  //   if (!passwordMatch) throw new UnauthorizedException('Invalid credentials');

  //   // בדיקת תפקידים
  //   const photographer = await this.prisma.photographer.findFirst({
  //     where: { userId: user.id }
  //   });

  //   const payload = { 
  //     sub: user.id, 
  //     email: user.email, 
  //     isAdmin: user.isAdmin,
  //     isPhotographer: !!photographer,
  //     photographerId: photographer?.id || null
  //   };
    
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //     user: {
  //       id: user.id,
  //       email: user.email,
  //       name: `${user.firstName} ${user.lastName}`.trim(),
  //       isAdmin: user.isAdmin,
  //       isPhotographer: !!photographer,
  //       photographerId: photographer?.id || null
  //     }
  //   };
  // }


}
