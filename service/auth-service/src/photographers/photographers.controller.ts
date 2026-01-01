import { Body, Controller, Post, Get, UseGuards, Request, Patch, Param } from '@nestjs/common';
import { ApiTags, ApiBody, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { PhotographersService } from './photographers.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreatePhotographerDto } from './dto/create-photographer.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { EMAIL_STATUS } from '../constants/status.constants';
import { CheckEmailDto } from './dto/CheckEmailDto.dto';

@ApiTags('Photographers')
@Controller('photographers')
export class PhotographersController {
  constructor(
    private readonly authService: AuthService,
    private readonly photographersService: PhotographersService,
    private readonly usersService: UsersService,
  ) {}

  @Post('checkEmailForRegister')
  @ApiBody({ type: CheckEmailDto })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 400, description: 'האיימל כבר קיים במערכת' })
  async checkEmailForRegister(
    @Body() body: CheckEmailDto,
  ) {
    return await this.usersService.checkEmailStatusToRegister(body.email);
  }

  // @Post('register')
  // @ApiBody({ type: CreateUserDto })
  // @ApiResponse({ status: 201, description: 'צלם נוצר בהצלחה' })
  // async registerPhotographer(
  //   @Body() createUserDto: CreateUserDto,
  //   @Body() createPhotographerDto: CreatePhotographerDto
  // ) {
  //   // יצירת משתמש
  //   const user = await this.authService.register(createUserDto);
    
  //   // יצירת פרופיל צלם
  //   const photographer = await this.photographersService.createPhotographer(
  //     user.id, 
  //     createPhotographerDto
  //   );
    
  //   return {
  //     message: 'Photographer registered successfully',
  //     user,
  //     photographer
  //   };
  // }

  // @Post('setup')
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // @ApiBody({ type: CreatePhotographerDto })
  // async setupPhotographer(
  //   @Request() req,
  //   @Body() createPhotographerDto: CreatePhotographerDto
  // ) {
  //   return this.photographersService.createPhotographer(
  //     req.user.sub,
  //     createPhotographerDto
  //   );
  // }

  // @Post('clients')
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // @ApiBody({ type: CreateClientDto })
  // async registerClient(
  //   @Request() req,
  //   @Body() createClientDto: CreateClientDto
  // ) {
  //   return this.photographersService.registerClient(
  //     req.user.photographerId,
  //     createClientDto
  //   );
  // }

  // @Get('clients')
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // async getMyClients(@Request() req) {
  //   return this.photographersService.getClients(req.user.photographerId);
  // }

  // @Patch('clients/:clientId/status')
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // async updateClientStatus(
  //   @Request() req,
  //   @Param('clientId') clientId: string,
  //   @Body() body: { status: number }
  // ) {
  //   return this.photographersService.updateClientStatus(
  //     req.user.photographerId,
  //     +clientId,
  //     body.status
  //   );
  // }

  // @Get('profile')
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  // async getProfile(@Request() req) {
  //   return this.photographersService.findByUserId(req.user.sub);
  // }
}