import { IsNotEmpty } from "class-validator";

export class MakeSearchSDTO {
    @IsNotEmpty()
    search: string;
}