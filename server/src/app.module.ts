import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from './modules/Search/search.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/projeto_busca'),
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore({ ttl: 10000 }),
      }),
      isGlobal: true,

    }),
    SearchModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
