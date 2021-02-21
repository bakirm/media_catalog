package restapimediacatalog.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restapimediacatalog.rest.exception.NotFoundException;
import restapimediacatalog.rest.models.Country;
import restapimediacatalog.rest.repositories.CountryRepository;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class CountryController {

    @Autowired
    private CountryRepository countryRepository;

    @GetMapping("/country")
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }


    @PostMapping("/country")
    public Country createCountry(@Valid @RequestBody Country country) {
        return countryRepository.save(country);
    }


    @GetMapping("/country/{id}")
    public Country getCountrybyId(@PathVariable(value = "id") Integer countryId) {
        return countryRepository.findById(countryId)
                .orElseThrow(() -> new NotFoundException("Country " + countryId + " not found"));
    }


    @PutMapping("/country/{id}")
    public Country updateCountryitem(@PathVariable(value = "id") Integer countryitemId, @Valid @RequestBody Country countryItem) {
        return countryRepository.findById(countryitemId).map(countryitem -> {
            countryitem.setCountryname(countryItem.getCountryname());
            return countryRepository.save(countryitem);
        }).orElseThrow(() -> new NotFoundException("Country " + countryitemId + " not found"));
    }


    @DeleteMapping("/country/{id}")
    public ResponseEntity<?> deleteMediaitemId(@PathVariable(value = "id") Integer countryitemId) {
        Country countryitem = countryRepository.findById(countryitemId)
                .orElseThrow(() -> new NotFoundException("Country " + countryitemId + " not found"));

        countryRepository.delete(countryitem);

        return ResponseEntity.ok().build();
    }
}
