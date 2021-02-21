package restapimediacatalog.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import restapimediacatalog.rest.models.Genre;

public interface GenreRepository extends JpaRepository<Genre, Integer> {

    Boolean existsByGenrename(String genrename);
}
