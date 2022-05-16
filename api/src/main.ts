import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get<{ port: number; origin: string }>('server');

  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  logger.log(`env "${process.env.NODE_ENV}"`);
  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    logger.log(`Accepting request from origin "${serverConfig.origin}"`);
    app.enableCors({ origin: serverConfig.origin });
  }

  app.setGlobalPrefix('api');
  const port = serverConfig.port;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}

bootstrap();
