import { Controller, Get, Param, Req, Query, Post, Body, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ApiTags, ApiCreatedResponse, ApiPropertyOptional, ApiOperation, ApiBearerAuth, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { account } from '../../entities/account';
import { AccountDto, AccountGetDTO} from './dto/account.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('account')
// @UseGuards(AuthGuard)
export class AccountController {
    constructor(private accountService: AccountService) {}
    
    /**
     * 取得帳號資料
     * @param query 
     */
    @Get()
    @ApiBearerAuth()
    @ApiTags('accountApi')
    @ApiPropertyOptional({ required: false })
    @ApiResponse({
        status: 200,
        description: '成功取得帳號',
        type: account
    })
    @ApiOperation({ summary: '取得帳號資料' })
    get(@Query() query: AccountGetDTO) {
        return this.accountService.findAccountData(query.account);
    }

    @Get('/test')
    @ApiBearerAuth()
    @ApiTags('test')
    @ApiPropertyOptional({ required: false })
    @ApiResponse({
        status: 200,
        description: '成功取得帳號',
        type: account
    })
    @ApiOperation({ summary: '取得帳號資料' })
    testget(@Query() query: AccountGetDTO) {
        return this.accountService.findUser(query.account);
    }
    // #region 以網址傳遞參數的方式, get建議以Query傳遞參數，如上
    /*
    @Get('/getPassword/:account&:email')
    getPassword(@Param('account') account: string, @Param('email') email: string) {
        return  `key in account = ${account}, email = ${email}`;
    }
    */
    // #endregion

    @Post()
    @ApiTags('accountApi')
    @ApiCreatedResponse({
        description: 'account created'
    })
    create(@Body() accountDTO: AccountDto) {
        return this.accountService.createAccount(accountDTO);
    }
}
