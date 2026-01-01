import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PhotographersController } from './photographers/photographers.controller';
import { PhotographersService } from './photographers/photographers.service';
import { ClientsController } from './clients/clients.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [PhotographersController, ClientsController],
  providers: [PhotographersService, PrismaService],
})
export class AppModule {}
