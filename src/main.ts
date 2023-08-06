import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import compression from '@fastify/compress';

import helmet from '@fastify/helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('/api');
  app.enableCors({ origin: 'https://shoeb.netlify.app' });

  await app.register(compression, { encodings: ['gzip', 'deflate'] });
  await app.register(helmet);

  await app.listen(1111, '0.0.0.0');
}
bootstrap();
