import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from './modules/Search/search.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  //change the url file for test
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    SearchModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
