package restapimediacatalog.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restapimediacatalog.rest.dto.SearchResultDto;
import restapimediacatalog.rest.exception.NotFoundException;
import restapimediacatalog.rest.models.mediaItem;
import restapimediacatalog.rest.repositories.ArtistNameRepository;
import restapimediacatalog.rest.repositories.MediaitemRepository;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class MediaController {

    @Autowired
    MediaitemRepository mediaitemRepository;

    @Autowired
    private ArtistNameRepository artistNameRepository;

    @GetMapping("/mediaitem")
    public List<mediaItem> getAllMediaitems() {
        return mediaitemRepository.findAll();
    }


    @PostMapping("/mediaitem")
    public mediaItem createMediaItem(@Valid @RequestBody mediaItem mediaItem) throws Exception {

        if(mediaitemRepository.existsByMediaitemname(mediaItem.getMediaitemname())) {
            throw new Exception("mediaitem_exists");

        }

        return mediaitemRepository.save(mediaItem);
    }

    @PostMapping("/mediaitem/search")
    public ResponseEntity<?> searchbyMediaitem(@Valid @RequestBody SearchResultDto searchResultDto, @RequestParam(value = "isasc") boolean ascending, @RequestParam(value = "name") String name) {

        Sort sortby;

        switch (name) {
            case "artist": sortby=Sort.by(ascending ? Sort.Direction.ASC : Sort.Direction.DESC, "ar.createdAt"); break;
            case "genre": sortby=Sort.by(ascending ? Sort.Direction.ASC : Sort.Direction.DESC, "ge.createdAt"); break;
            case "country": sortby=Sort.by(ascending ? Sort.Direction.ASC : Sort.Direction.DESC, "co.createdAt");; break;
            case "provider": sortby=Sort.by(ascending ? Sort.Direction.ASC : Sort.Direction.DESC, "pr.createdAt"); break;
           default: sortby=Sort.by(ascending ? Sort.Direction.ASC : Sort.Direction.DESC, "createdAt"); break;
        } 

        List<SearchResultDto> newList = mediaitemRepository.findBySearch("%" + searchResultDto.getMediaitemname() + "%", "%" + searchResultDto.getArtistname() + "%", "%" + searchResultDto.getGenrename() + "%", "%" + searchResultDto.getCountryname() + "%", "%" + searchResultDto.getProvidername() + "%",searchResultDto.getGenre_id(), searchResultDto.getCountry_id(),searchResultDto.getProvider_id(), sortby);

        try {
            if (!newList.isEmpty()) {
                return new ResponseEntity<>(newList, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }


    @GetMapping("/mediaitem/{id}")
    public mediaItem getMediaitemByid(@PathVariable(value = "id") Long mediaitemId) {
        return mediaitemRepository.findById(mediaitemId)
                .orElseThrow(() -> new NotFoundException("Mediaitem" + mediaitemId + " not found"));
    }


    @PutMapping("/mediaitem/{id}")
    public mediaItem updateMediaitem(@PathVariable(value = "id") Long mediaitemId, @Valid @RequestBody mediaItem
            mediaItem) {
        return mediaitemRepository.findById(mediaitemId).map(mediaitem -> {
            mediaitem.setMediaitemname(mediaItem.getMediaitemname());
            return mediaitemRepository.save(mediaitem);
        }).orElseThrow(() -> new NotFoundException("PostId " + mediaitemId + " not found"));
    }


    @DeleteMapping("/mediaitem/{id}")
    public ResponseEntity<?> deleteMediaitembyId(@PathVariable(value = "id") Long mediaitemId) {
        mediaItem mediaitem = mediaitemRepository.findById(mediaitemId)
                .orElseThrow(() -> new NotFoundException("Mediaitem" + mediaitemId + " not found"));

        mediaitemRepository.delete(mediaitem);

        return ResponseEntity.ok().build();
    }
}
