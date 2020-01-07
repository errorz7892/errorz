import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';

@Injectable()
export class AuthService {
    constructor(
      private readonly usersService: UsersService, // 測試用假資料
      private readonly jwtService: JwtService,
      // private readonly accountService: AccountService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
      const user = await this.usersService.findOne(username);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: any) {
      console.log('login gain token');
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}
