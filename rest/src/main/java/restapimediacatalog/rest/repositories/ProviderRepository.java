package restapimediacatalog.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import restapimediacatalog.rest.models.Provider;

public interface ProviderRepository extends JpaRepository<Provider, Integer> {

    Boolean existsByProvidername(String providername);
}
