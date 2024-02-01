import { Controller, Get, ValidationPipe, Query, Post, UsePipes, Body, Inject, UseInterceptors } from '@nestjs/common';
import { SearchService } from './search.service';
import { Search } from './search.interface';
import { MakeSearchSDTO } from './dtos/make-search.dto';

@Controller('search')
export class SearchController {

    constructor(
        private searchService: SearchService
    ) { }

    @Get()
    getSearch(): Promise<Search[]> {
        return this.searchService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async makeSearch(@Body() makeSearch: MakeSearchSDTO): Promise<Search> {
        const results = await this.searchService.search(makeSearch) as Search;
        return results;
    }
}