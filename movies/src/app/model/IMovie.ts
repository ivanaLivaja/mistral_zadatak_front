import { ICast } from './ICast';
import { IMovieRate } from './IMovieRate';

export interface IMovie {
    id?: number;
    title?: string;
    coverImage?: Blob;
    url?: string;
    description?: string;
    releaseDate?: Date;
    cast?: ICast[];
    movieRate?: IMovieRate;
    tvShow?: boolean;
}

export class Movie implements IMovie{
   constructor (public id?: number, public title?: string, public coverImage?: Blob, 
    public url?: string, public description?: string, public releaseDate?: Date,
    public cast?: ICast[], public movieRate?: IMovieRate, public tvShow?: boolean) {}
}