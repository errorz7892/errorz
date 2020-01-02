import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TestService } from './test/test.service';
import { account} from '../entities/account';
@Module({
  imports: [TypeOrmModule.forRoot({    
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'enableets',
      entities: [        
        account
      ],
      synchronize: true,  
  }),
  TestModule]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
 }
