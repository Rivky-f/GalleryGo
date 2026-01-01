/**
 * Create Photographer DTO
 * DTO ליצירת צלם חדש
 */

import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreatePhotographerDto {

  @ApiProperty({ required: true })
  user?: CreateUserDto;

  @ApiProperty({ example: 'סטודיו אור', required: true })
  @IsOptional()
  @IsString()
  studioName?: string;
}