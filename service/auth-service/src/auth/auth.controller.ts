import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    // @Post('login')
    // @ApiBody({ type: LoginDto })
    // async login(@Body() loginDto: LoginDto) {
    //     return this.authService.login(loginDto.email, loginDto.password);
    // }
}
