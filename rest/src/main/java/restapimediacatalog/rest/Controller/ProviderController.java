package restapimediacatalog.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restapimediacatalog.rest.exception.NotFoundException;
import restapimediacatalog.rest.models.Provider;
import restapimediacatalog.rest.repositories.ProviderRepository;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProviderController {

    @Autowired
    private ProviderRepository providerRepository;

    @GetMapping("/provider")
    public List<Provider> getAllMediaitems() {
        return providerRepository.findAll();
    }


    @PostMapping("/provider")
    public Provider createArtist(@Valid @RequestBody Provider provider) throws Exception {

        if(providerRepository.existsByProvidername(provider.getProvidername())) {
            throw new Exception("provider_exists");

        }

        return providerRepository.save(provider);
    }


    @GetMapping("/provider/{id}")
    public Provider getProviderbyId(@PathVariable(value = "id") Integer providerId) {
        return providerRepository.findById(providerId)
                .orElseThrow(() -> new NotFoundException("Provider " + providerId + " not found"));
    }


    @PutMapping("/provider/{id}")
    public Provider updateProvideritem(@PathVariable(value = "id") Integer provideritemId, @Valid @RequestBody Provider providerItem) {
        return providerRepository.findById(provideritemId).map(provideritem -> {
            provideritem.setProvidername(providerItem.getProvidername());
            return providerRepository.save(provideritem);
        }).orElseThrow(() -> new NotFoundException("Provider " + provideritemId + " not found"));
    }


    @DeleteMapping("/provider/{id}")
    public ResponseEntity<?> deleteMediaitemId(@PathVariable(value = "id") Integer provideritemId) {
        Provider provideritem = providerRepository.findById(provideritemId)
                .orElseThrow(() -> new NotFoundException("Provider " + provideritemId + " not found"));

        providerRepository.delete(provideritem);

        return ResponseEntity.ok().build();
    }
}

