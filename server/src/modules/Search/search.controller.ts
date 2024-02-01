import { Controller, Get, ValidationPipe, Query, Post, UsePipes, Body, Inject, UseInterceptors } from '@nestjs/common';
import { SearchService } from './search.service';
import { Search } from './search.interface';
import { MakeSearchSDTO } from './dtos/make-search.dto';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Controller('search')
export class SearchController {

    constructor(
        private searchService: SearchService,
        @Inject(CACHE_MANAGER) private gerenciadorDeCache: Cache,
        ) { }

    @Get()
    getSearch(): Promise<Search[]> {
        return this.searchService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UseInterceptors(CacheInterceptor)
    async makeSearch(@Body() makeSearch: MakeSearchSDTO): Promise<Search> {
        let results = await this.gerenciadorDeCache.get<Search>(
            `makeSearch-${makeSearch.search}`,
        );

        if (!results) {
            results = await this.searchService.search(makeSearch) as Search;

            await this.gerenciadorDeCache.set(`makeSearch-${makeSearch.search}`, results);
        }
        return results;
    }
}