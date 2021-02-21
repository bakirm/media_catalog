import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/models/genre.model';

@Component({
  selector: 'app-genre-details',
  templateUrl: './genre-details.component.html',
  styleUrls: ['./genre-details.component.css'],
})
export class GenreDetailsComponent implements OnInit {

  id?: number;
  genre?: Genre;

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.genre = new Genre();
    this.id = this.route.snapshot.params['id'];
    this.genreService.get(this.id).subscribe(
      (data) => {
        console.log(data);
        this.genre = data;
      },
      (error) => console.log(error)
    );
  }

  getGenre(id: string): void {
    this.genreService.get(id).subscribe(
      (data) => {
        this.genre = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateGenre() {
    this.genreService.update(this.id, this.genre).subscribe(
      (data) => {
        console.log(data);
        this.genre = new Genre();
        this.goToGenres();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.updateGenre();
  }

  goToGenres() {
    this.router.navigate(['/genre']);
  }
}
