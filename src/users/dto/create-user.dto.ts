import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(18)
  age: number;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
