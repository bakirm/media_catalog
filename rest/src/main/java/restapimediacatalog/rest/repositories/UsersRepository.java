package restapimediacatalog.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import restapimediacatalog.rest.models.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {

    Boolean existsByUsername(String username);
}
