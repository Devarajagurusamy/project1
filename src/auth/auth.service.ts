import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,  // Inject the UsersService to interact with user data
    private readonly jwtService: JwtService,      // Inject JwtService to issue JWT tokens
  ) {}

  // Validate user credentials (username and password)
  async validateUser(username: string, password: string): Promise<any> {
    // Find the user by username
    const user = await this.usersService.findByUsername(username);
    
    // If user exists and password matches
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;  // Exclude password from user data before returning
      return result;  // Return the user data (excluding the password)
    }
    
    // If credentials are invalid, throw UnauthorizedException
    throw new UnauthorizedException('Invalid credentials');
  }

  // Generate and return a JWT token for a user
  async login(user: any) {
    // Create payload for JWT token (usually includes user ID and username)
    const payload = { username: user.username, sub: user.id };
    
    // Sign the payload and generate the JWT token
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
