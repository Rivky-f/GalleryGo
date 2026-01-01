import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckEmailDto {
  @ApiProperty({
    example: 'test@example.com'
  })
  @IsEmail()
  email: string;
}
