package restapimediacatalog.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import restapimediacatalog.rest.models.Artist;

import java.util.List;

public interface ArtistNameRepository extends JpaRepository<Artist, Long> {

    Boolean existsByArtistname(String artistname);


}

