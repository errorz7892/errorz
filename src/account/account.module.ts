import { Module } from '@nestjs/common';
import { AccountController} from './account.controller';
import { AccountService} from './account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { account } from '../../entities/account';

@Module({
    imports: [TypeOrmModule.forFeature([account])],
    controllers: [AccountController],
    providers: [AccountService],
})
export class AccountModule {}
