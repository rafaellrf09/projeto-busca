import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchSchema } from './search.schema';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Search', schema: SearchSchema }]), HttpModule],
    controllers: [SearchController],
    providers: [SearchService],
})
export class SearchModule { }