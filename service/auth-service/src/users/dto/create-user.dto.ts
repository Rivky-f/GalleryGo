import { IsEmail, IsNotEmpty, IsString, MinLength, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ example: 'rivky@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', writeOnly: true })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'CLIENT', enum: Role })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ example: 'Rivky' })
  @IsString()
  name?: string;
}
