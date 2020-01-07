import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { account } from '../entities/account';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LocalStrategy } from './auth/local.strategy';
import { jwtConstants } from './auth/constants';
import { AuthService } from './auth/auth.service';
import { JwtModule } from "@nestjs/jwt";

@Module({
  // TypeOrmModule.forRoot()參數為空時，會讀取ormconfig.json
  // 也可不用ormconfig.json，直接設定於forRoot裡面
  // forRoot內的設定與ormconfig.json同時存在時，會以forRoot為主
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'enableets',
      entities: [
        account // 單獨以account測試，載入整個DB很久...
        // "entities/*.ts" // 載入所有table
      ],
      synchronize: false,
    }
  ),
    AccountModule,
    AuthModule,
    UsersModule,
  ],
  // 因AccountModule內已載入Controller與Service, 下面就不需額外載入
  providers: [AppService, LocalStrategy, JwtModule],
  controllers: [AppController]
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
