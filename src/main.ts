import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Technical Service From HELL!!!')
    .setDescription('The worst customer support you can pay!')
    .setVersion('1.0')
    .addTag('What do you whant???')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'consumer',
      }
    },
  });

  await app.startAllMicroservices();

  await app.listen(3000);

  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
