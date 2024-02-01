import { Document } from 'mongoose'

export class Search extends Document {
    search: string;
    results: Array<Object>;
}