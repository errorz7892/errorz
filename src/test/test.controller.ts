import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('test')
export class TestController {
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `this #${id} product`;
    }

    @Get('/abc/:id')
    findOneAbc(@Param('id') id: string) {
        return  `this is abc ${id} product`;
    }

    @Get()
    findOrg(@Req() res: Request) {
        return [1,2,3];
    }
}
