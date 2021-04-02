import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MoviesService } from './movies.service';
import { IMovie } from '../model/IMovie';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { element } from 'protractor';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(protected moviesService: MoviesService, protected sanitizer: DomSanitizer, protected matSnackBar: MatSnackBar) { }

  searchForm = new FormControl('');
  data?: IMovie[] = [];
  movies?: IMovie[] = [];
  shows?: IMovie[] = [];
  searchItems?: any[] = [];
  url?: string = undefined;
  text?: string = undefined;


  ngOnInit(): void {
    this.getMovies();
  }
  
  getMovies(){
    this.moviesService.findAll().subscribe( response => {

      console.log(response);
      if(response){

        this.data = response;

        this.getTopMovies(this.data);
      
    }
    
  }, 
  errorRESP => {        
          this.openSnackBar(errorRESP.error.message, 'OK')
        });
      } 

  openSnackBar(message: string, action: string){
    this.matSnackBar.open(message, action, {
      duration: 8000})
  }

  getTopMovies(data: IMovie[]){


    data.forEach((element, indexedDB) => {

      this.url = 'data:image/jpg;base64,' + element.coverImage;          
      

      if(this.data) {
        this.data[indexedDB].url = this.url;
      }
      
    });

    data.forEach((element, indexedDB) => {
      if (element.tvShow) {
          this.shows?.push(element);
      }
      else {
        this.movies?.push(element);
      }
    });
  }


  search(text: any) {
    

    if (text && text.length >= 2) {
      this.moviesService.findbySearch(text).subscribe( response => {

        console.log(response);

        this.movies = [];
        this.shows = [];

        if(response){
  
          this.getTopMovies(response);
          text = undefined;
        }

      
      }, 
      errorRESP => {        
              this.openSnackBar(errorRESP.error.message, 'OK')
              text = undefined;
            });
      } 
    }
    

}