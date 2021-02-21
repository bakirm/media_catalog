package restapimediacatalog.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import restapimediacatalog.rest.models.Country;

public interface CountryRepository extends JpaRepository<Country, Integer> {

    Boolean existsByCountryname(String countryname);
}
