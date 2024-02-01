import * as mongoose from 'mongoose';

export const SearchSchema = new mongoose.Schema({
    search: String,
    totalResults: String,
    results: Array<Object>,
});