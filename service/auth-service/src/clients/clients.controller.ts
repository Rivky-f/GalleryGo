import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly authService: AuthService) {}

  // @Post('register')
  // @ApiOperation({ summary: 'רישום לקוח עצמאי' })
  // @ApiBody({ type: CreateUserDto })
  // async registerClient(@Body() createUserDto: CreateUserDto) {
  //   return this.authService.register(createUserDto);
  // }
}