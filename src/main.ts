import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const now = new Date(Date.now());
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 設定Swagger大標題
  const options = new DocumentBuilder()
    .setTitle('ETS Swagger Sample')
    .setDescription(`學創 MSSR 伺服器端 API 線上文件 (${now})`)
    .setVersion('1.0')
    // .addTag('ETS')
    // .addBearerAuth()
    // .addBasicAuth() // account + password驗證登入
    .addSecurity('token', {
      type: 'apiKey',
      scheme: 'basic'
    })
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`server start at ${now}`);
}
bootstrap();
