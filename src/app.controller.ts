import { Controller, Post, UseGuards, Body, Get, Request, Query} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { AccountLoginDTO } from './account/dto/account.dto';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) { }
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }



    @UseGuards(AuthGuard('local'))
    @Post('/auth/test/login')
    async testlogin(@Body() que) {
        // return this.authService.login(que);
    }


}