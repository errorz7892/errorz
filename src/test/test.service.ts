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

    /**
     * 查詢密碼
     * @param acc 帳號
     */
    public async findAcPwd(acc:string): Promise<string> {
        
        // plan A
        /*
        const dbAccountData = await this.accountRepository.findOne({
            account: acc
        });
        */

        // plan B
        /* 
        const dbAccountData = await this.accountRepository.findOne({
            select: ['password'],
            where: [{ account: acc}]
        });
        */

        // plan C
        const dbAccountData = await this.accountRepository.query(`SELECT * from Account where account = 'super'` );

        return dbAccountData.password;


    }

    /**
     * 新建一筆帳號
     * @param account accountDTO
     */
    public async createAccount(account: AccountDto): Promise<account> {
        return await this.accountRepository.create(account);
    }

    /**
     * 更新帳號
     * @param id uid
     * @param acc account資料表
     */
    public async updateAccount(id: number, acc: account) {
        return await this.accountRepository.update(id, acc);
    }
}
