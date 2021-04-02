import { ICastMember } from './ICastMember';

export interface ICast {
    id?: number;
    movieId?: number;
    castMember?: ICastMember;

}

export class Cast implements ICast{
   constructor (public id?: number, movieId?: number, castMember?: ICastMember) {}
}
