import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { MovieDetails } from 'src/app/shared/models/movieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId: number = 0;
  movie!: MovieDetails;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      p => {
        this.movieId = Number(p.get('id'));
        // console.log('movieId from URL is: ' + this.movieId);
        // call the movie service and get the movie details model

        this.movieService.getMovieDetails(this.movieId).subscribe(
          m => {
            this.movie = m;
            // console.log(this.movie);
          }
        );
      }
    );
  }
  
  // in Angular ActivatedRoute to read the current routing information
  // create movieservice, getdetails method, get the movie id from the URL/route

}
