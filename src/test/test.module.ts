import { Module } from '@nestjs/common';
import { TestController} from './test.controller';
import { TestService} from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { account } from '../../entities/account';

@Module({
    imports: [TypeOrmModule.forFeature([account])],
    controllers: [TestController],
    providers: [TestService],
})
export class TestModule {}
