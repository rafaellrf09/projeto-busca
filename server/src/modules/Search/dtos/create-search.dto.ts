import { IsArray, IsNotEmpty } from "class-validator";

export class CreateSearchDTO {
    @IsNotEmpty()
    search: string;
    
    @IsNotEmpty()
    totalResults: string;

    @IsArray()
    results: Array<Object>;
}