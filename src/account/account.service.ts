import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { account } from '../../entities/account';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountDto } from './dto/account.dto';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(account)
        private readonly accountRepository: Repository<account>
    ) {}

    public async findUser(acc: string): Promise<AccountDto> {
        const accountData = await this.accountRepository.find({
            account: acc
        });

        return accountData[0];
    }
    /**
     * 以帳號查詢帳號詳細資訊
     * @param acc 帳號
     */
    public async findAccountData(acc: string): Promise<account[]> {
        try {
            const accountData = await this.accountRepository.find({
                account: acc
            });

            if (accountData == null) {
                throw('errorcode.xxxx');
            }

            return accountData;
        } catch(err) {
            return err;
        }
    }

    /**
     * 查詢密碼
     * @param acc 帳號
     */
    public async findAcPwd(acc:string): Promise<string> {
        try {
            const dbAccountData = await this.accountRepository.findOne({
                account: acc
            });

            if (dbAccountData ==null) {
                throw('dbAccount is Null');
            }

            // const abc = await this.accountRepository.xxx // = .then()

            return dbAccountData.password;
        } catch(err) {
            console.log(err);
            return null;
        }

        // TypeORM操作DB方法2
        /* 
        const dbAccountData = await this.accountRepository.findOne({
            select: ['password'],
            where: [{ account: acc}]
        });
        */

        // TypeORM操作DB方法3
        /*
        const dbAccountData = await this.accountRepository.query(`SELECT * from Account where account = 'super'` );
        */
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
