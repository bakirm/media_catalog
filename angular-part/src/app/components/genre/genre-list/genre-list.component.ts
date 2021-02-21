import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';
import { Observable } from 'rxjs';
import { GenreService } from 'src/app/services/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css'],
})
export class GenreListComponent implements OnInit {
  genres?: Observable<Genre[]>;

  constructor(private genreService: GenreService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveGenres();
  }

  retrieveGenres(): void {
    this.genres = this.genreService.getAll();
  }

  deleteGenre(id: number): void {
    this.genreService.delete(id).subscribe(
      data => {
        console.log(data);
        this.retrieveGenres();
      },
      error => console.log(error)
    );
  }

  genreDetails(id: number) {
    this.router.navigate(['genre', id]);
  }

  // updateGenre(id: any): void {
  //   this.genreService.update(id, this.currentGenre).subscribe(
  //     (data) => {
  //       this.currentGenre = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // refreshList(): void {
  //   this.retrieveGenres();
  //   this.currentGenre = null;
  //   this.currentIndex = -1;
  // }
}
