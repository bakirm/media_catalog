package restapimediacatalog.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import restapimediacatalog.rest.models.MediaPublish;

import java.util.List;

public interface MediaPublishRepository extends JpaRepository<MediaPublish, Long> {

    @Query("SELECT ed FROM MediaPublish ed WHERE ed.expiry_date < CURRENT_DATE ")
    List<MediaPublish> FindByExpiryDate();

}
