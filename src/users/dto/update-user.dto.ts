import { IsOptional, IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly role?: string;

  @IsString()
  @IsOptional()
  password?: string;

}
