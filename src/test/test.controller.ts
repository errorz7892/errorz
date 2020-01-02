import { Controller, Get, Param, Req, Query, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { ApiTags, ApiProperty, ApiCreatedResponse } from '@nestjs/swagger';
import { TestService } from './test.service';
import { account } from '../../entities/account';
import { AccountDto} from './dto/account.dto';

class accountDTO {
    @ApiProperty({
        required: true,
        description:'userAccount',
    })
    account: string
}

@Controller('accountRouter')
export class TestController {
    constructor(private testService: TestService) {}
    
    @Get()
    @ApiTags('accountApi')
    getAccount(@Query() query: accountDTO) {
        return this.testService.findAcPwd(query.account);
    }

    @Get('/abc/:id&:anc')
    findOneAbc(@Param('id') id: string) {
        return  `key in abc id= ${id}`;
    }

    @Post()
    @ApiTags('accountApi')
    @ApiCreatedResponse({
        description: 'account created'
    })
    create(@Body() accountDTO: AccountDto) {
        return this.testService.createAccount(accountDTO);
    }
}
