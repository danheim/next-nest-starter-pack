import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    CacheModule.registerAsync<RedisClientOptions>({
      useFactory: () => ({
        store: redisStore,
        host: 'redis',
        port: 6379,
      }),
    }),
    PrismaModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
