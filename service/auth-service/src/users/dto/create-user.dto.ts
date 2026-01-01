import { IsEmail, IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'email@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', writeOnly: true })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'firstName' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'lastName' })
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  @MinLength(9)
  phone: string;

}
