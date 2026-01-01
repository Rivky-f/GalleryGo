/**
 * Photographers Service
 * שירות לניהול צלמים
 */

import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CreatePhotographerDto } from './dto/create-photographer.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CLIENT_STATUS } from '../constants/status.constants';
import { generateInviteToken } from '../utils/token.utils';

@Injectable()
export class PhotographersService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  // async createPhotographer(userId: number, createPhotographerDto: CreatePhotographerDto) {
  //   const user = await this.usersService.findOne(userId);
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }

  //   const existingPhotographer = await this.prisma.photographer.findFirst({
  //     where: { userId }
  //   });

  //   if (existingPhotographer) {
  //     throw new BadRequestException('User is already a photographer');
  //   }

  //   return this.prisma.photographer.create({
  //     data: {
  //       userId,
  //       studioName: createPhotographerDto.studioName,
  //     },
  //     include: {
  //       user: {
  //         select: {
  //           id: true,
  //           email: true,
  //           firstName: true,
  //           lastName: true,
  //         }
  //       }
  //     }
  //   });
  // }

  /**
   * קבלת פרטי צלם
   */
  // async findOne(photographerId: number) {
  //   const photographer = await this.prisma.photographer.findUnique({
  //     where: { id: photographerId },
  //     include: {
  //       user: {
  //         select: {
  //           id: true,
  //           email: true,
  //           firstName: true,
  //           lastName: true,
  //         }
  //       }
  //     }
  //   });

  //   if (!photographer) {
  //     throw new NotFoundException('Photographer not found');
  //   }

  //   return photographer;
  // }

  /**
   * קבלת צלם לפי מזהה משתמש
   */
  // async findByUserId(userId: number) {
  //   return this.prisma.photographer.findFirst({
  //     where: { userId },
  //     include: {
  //       user: {
  //         select: {
  //           id: true,
  //           email: true,
  //           firstName: true,
  //           lastName: true,
  //         }
  //       }
  //     }
  //   });
  // }

  /**
   * רישום לקוח חדש על ידי צלם
   */
  // async registerClient(photographerId: number, createClientDto: CreateClientDto) {
  //   const photographer = await this.findOne(photographerId);

  //   const existingClient = await this.prisma.client.findUnique({
  //     where: {
  //       photographerId_clientEmail: {
  //         photographerId,
  //         clientEmail: createClientDto.clientEmail
  //       }
  //     }
  //   });

  //   if (existingClient) {
  //     throw new BadRequestException('Client already registered with this photographer');
  //   }

  //   let user = await this.usersService.findByEmail(createClientDto.clientEmail);
  //   let isNewUser = false;

  //   if (!user && createClientDto.clientPassword) {
  //     const createUserDto: CreateUserDto = {
  //       email: createClientDto.clientEmail,
  //       name: createClientDto.clientName,
  //       password: createClientDto.clientPassword,
  //     };
      
  //     user = await this.usersService.create(createUserDto);
  //     isNewUser = true;
  //   }

  //   const client = await this.prisma.client.create({
  //     data: {
  //       photographerId,
  //       userId: user?.id || null,
  //       clientEmail: createClientDto.clientEmail,
  //       clientFirstName: createClientDto.clientName?.split(' ')[0] || null,
  //       clientLastName: createClientDto.clientName?.split(' ').slice(1).join(' ') || null,
  //       status: user ? CLIENT_STATUS.ACTIVE : CLIENT_STATUS.PENDING,
  //       inviteToken: !user ? generateInviteToken() : null,
  //     },
  //     include: {
  //       user: user ? {
  //         select: {
  //           id: true,
  //           email: true,
  //           firstName: true,
  //           lastName: true,
  //         }
  //       } : undefined
  //     }
  //   });

  //   return {
  //     message: 'Client registered successfully',
  //     client,
  //     isNewUser,
  //     inviteLink: client.inviteToken ? `/invite/${client.inviteToken}` : null
  //   };
  // }

  /**
   * קבלת רשימת לקוחות של צלם
   */
  // async getClients(photographerId: number) {
  //   await this.findOne(photographerId);

  //   return this.prisma.client.findMany({
  //     where: { photographerId },
  //     include: {
  //       user: {
  //         select: {
  //           id: true,
  //           email: true,
  //           firstName: true,
  //           lastName: true,
  //           createdAt: true,
  //         }
  //       }
  //     },
  //     orderBy: {
  //       createdAt: 'desc'
  //     }
  //   });
  // }

  /**
   * עדכון סטטוס לקוח
   */
  // async updateClientStatus(photographerId: number, clientId: number, status: number) {
  //   const client = await this.prisma.client.findFirst({
  //     where: {
  //       id: clientId,
  //       photographerId
  //     }
  //   });

  //   if (!client) {
  //     throw new NotFoundException('Client not found');
  //   }

  //   return this.prisma.client.update({
  //     where: { id: clientId },
  //     data: { status },
  //     include: {
  //       user: {
  //         select: {
  //           id: true,
  //           email: true,
  //           firstName: true,
  //           lastName: true,
  //         }
  //       }
  //     }
  //   });
  // }
}