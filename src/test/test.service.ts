import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { account } from '../../entities/account';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountDto } from './dto/account.dto';

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(account)
        private readonly accountRepository: Repository<account>
    ) {}

    public async findAcPwd(acc): Promise<string> {
        const account = await this.accountRepository.findOne({
            account: acc
        });

        return account.password;
    }

    public async createAccount(account: AccountDto): Promise<account> {
        return await this.accountRepository.create(account);
    }
}
