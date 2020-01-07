import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];
    // 測試用假資料
    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
              },
              {
                userId: 2,
                username: 'chris',
                password: 'secret',
              },
              {
                userId: 3,
                username: 'maria',
                password: 'guess',
              },
        ]
    }

    // 搜尋帳號(假資料)
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
