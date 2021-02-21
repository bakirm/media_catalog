package restapimediacatalog.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import restapimediacatalog.rest.models.mediaToPublish;

import java.util.List;

public interface MediaToPublishRepository extends JpaRepository<mediaToPublish, Long> {

}
