import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // Validate user credentials
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; // Exclude password from the returned user object
      return result;
    }
    throw new UnauthorizedException('Invalid data service');
  }

  // Generate a JWT token
  async login(user: any) {
    const payload = { username: user.username, sub: user.id }; // Payload to encode in JWT
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
