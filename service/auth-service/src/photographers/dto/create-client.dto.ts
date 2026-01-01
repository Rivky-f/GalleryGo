/**
 * Create Client DTO
 * DTO ליצירת לקוח חדש על ידי צלם
 */

import { IsEmail, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ example: 'client@example.com' })
  @IsEmail()
  clientEmail: string;
}