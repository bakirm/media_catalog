package restapimediacatalog.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restapimediacatalog.rest.exception.NotFoundException;
import restapimediacatalog.rest.models.Genre;
import restapimediacatalog.rest.repositories.GenreRepository;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class GenreController {

    @Autowired
    GenreRepository genreRepository;

    @GetMapping("/genre")
    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }


    @PostMapping("/genre")
    public Genre createGenre(@Valid @RequestBody Genre genre) throws Exception {
        if (genreRepository.existsByGenrename(genre.getGenrename())) {
            throw new Exception("genre_exists");

        }

        return genreRepository.save(genre);


    }


    @GetMapping("/genre/{id}")
    public Genre getGenrebyId(@PathVariable(value = "id") Integer genreId) {
        return genreRepository.findById(genreId)
                .orElseThrow(() -> new NotFoundException("Genre " + genreId + " not found"));
    }


    @PutMapping("/genre/{id}")
    public Genre updateGenreitem(@PathVariable(value = "id") Integer genreitemId, @Valid @RequestBody Genre genreItem) {
        return genreRepository.findById(genreitemId).map(genreitem -> {
            genreitem.setGenrename(genreItem.getGenrename());
            return genreRepository.save(genreitem);
        }).orElseThrow(() -> new NotFoundException("Genre " + genreitemId + " not found"));
    }


    @DeleteMapping("/genre/{id}")
    public ResponseEntity<?> deleteGenrebyId(@PathVariable(value = "id") Integer genreitemId) {
        Genre genreitem = genreRepository.findById(genreitemId)
                .orElseThrow(() -> new NotFoundException("Genre " + genreitemId + " not found"));

        genreRepository.delete(genreitem);

        return ResponseEntity.ok().build();
    }
}

