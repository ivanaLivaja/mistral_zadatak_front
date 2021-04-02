export interface IMovieRate {

    id?: number;
    userCount?: number;
    grade?: number;
    avrgRate?: Number;
    stars?: Number[];

}

export class MovieRate implements IMovieRate{
   constructor (public id?: number, public userCount?: number, public grade?: number, public avrgRate?: Number, public stars?: Number[]) {}
}