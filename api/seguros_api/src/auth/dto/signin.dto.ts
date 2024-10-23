import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({ example: 'usuario123' })
  username: string;

  @ApiProperty({ example: '********' })
  password: string;
}