import { Controller, Post, Body, Get, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto); // Call UsersService to handle user creation
  }

   @Post('login')
  async login(@Body() loginDto: LoginDto) {
     const user = await this.authService.validateUser(loginDto.username, loginDto.password);
     
    if (!user) {
      throw new UnauthorizedException('Invalid data controller');
    }
    return this.authService.login(user);
  }

}
