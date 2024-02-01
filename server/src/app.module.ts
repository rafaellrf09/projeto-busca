import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from './modules/Search/search.module';

@Module({
  //change the url file for test
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/projeto_busca'), SearchModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
