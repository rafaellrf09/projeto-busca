import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Search } from './search.interface';
import { MakeSearchSDTO } from './dtos/make-search.dto';
import { HttpService } from '@nestjs/axios';
import { CreateSearchDTO } from './dtos/create-search.dto';
import { firstValueFrom, lastValueFrom, map, tap } from 'rxjs';

@Injectable()
export class SearchService {
    constructor(
        @InjectModel('Search') private searchModel: Model<Search>,
        private readonly httpService: HttpService
    ) { }

    async search(makeSearchDto: MakeSearchSDTO): Promise<Search> {
        const response = await firstValueFrom(this.httpService.get(`http://localhost:8000/search/${makeSearchDto.search}`)
            .pipe(
                map(res => res.data),
                // tap(data => console.log(data))
            ))

        const newSearch = new this.searchModel({
            search: makeSearchDto.search,
            searchTime: response.searchTime,
            totalResults: response.totalResults,
            results: response.results
        } as CreateSearchDTO);

        return newSearch.save();
    }

    async findAll(): Promise<Search[]> {
        return this.searchModel.find().exec();
    }
}
