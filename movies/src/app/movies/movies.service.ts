import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app.constants';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

// type EntityArrayResponseType = HttpResponse<any[]>

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public moviesResourceUrl = SERVER_API_URL + '/movies';
  public searchedMoviesResourceUrl = SERVER_API_URL + '/movies/';


  constructor(protected http: HttpClient) { }

  /**findAll(req?: any): Observable<EntityArrayResponseType>{
    return this.http.get<any[]>(this.moviesResourceUrl, {observe: 'response'});
  } */

  
  findAll(req?: any): Observable<any[]>{
    return this.http.get<any[]>(this.moviesResourceUrl);
  }

  findbySearch(text: string): Observable<any>{
    return this.http.get<any[]>(this.searchedMoviesResourceUrl + text);
  }
}
