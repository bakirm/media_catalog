package restapimediacatalog.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restapimediacatalog.rest.exception.NotFoundException;
import restapimediacatalog.rest.models.Artist;
import restapimediacatalog.rest.models.Genre;
import restapimediacatalog.rest.repositories.ArtistNameRepository;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ArtistController {

    @Autowired
    ArtistNameRepository artistNameRepository;

    @GetMapping("/artists")
    public List<Artist> getAllArtists() {
        return artistNameRepository.findAll();
    }


    @PostMapping("/artists")
    public Artist createArtist(@Valid @RequestBody Artist artist) throws Exception {

        if(artistNameRepository.existsByArtistname(artist.getArtistname())) {
            throw new Exception("artist_exists");

        }

        return artistNameRepository.save(artist);
    }

    @GetMapping("/artists/{id}")
    public Artist getArtistById(@PathVariable(value = "id") Long artistId) {
        return artistNameRepository.findById(artistId)
                .orElseThrow(() -> new NotFoundException("Artist " + artistId + " not found"));
    }



    @PutMapping("/artists/{id}")
    public Artist updateArtist(@PathVariable(value = "id") Long artistId,
                               @Valid @RequestBody Artist artistDetails) {

        Artist artist = artistNameRepository.findById(artistId)
                .orElseThrow(() -> new NotFoundException("Artist " + artistId + " not found"));

        artist.setArtistname(artistDetails.getArtistname());

        return artistNameRepository.save(artist);
    }

    @DeleteMapping("/artists/{id}")
    public ResponseEntity<?> deleteArtist(@PathVariable(value = "id") Long artistId) {
        Artist artist = artistNameRepository.findById(artistId)
                .orElseThrow(() -> new NotFoundException("Artist " + artistId + " not found"));

        artistNameRepository.delete(artist);

        return ResponseEntity.ok().build();
    }
}