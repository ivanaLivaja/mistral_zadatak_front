export interface ICastMember {
    id?: number;
    name?: string;
}

export class CastMember implements ICastMember{
   constructor (public id?: number, public name?: string) {}
}