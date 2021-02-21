package restapimediacatalog.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restapimediacatalog.rest.exception.NotFoundException;
import restapimediacatalog.rest.models.mediaToPublish;
import restapimediacatalog.rest.repositories.MediaToPublishRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MediaToPublishController {

    @Autowired
    MediaToPublishRepository mediaToPublishRepository;

    @PostMapping("/mediaitem/publish")
    public mediaToPublish assignMediaItem(@Valid @RequestBody mediaToPublish mediaToPublish) {
        return mediaToPublishRepository.save(mediaToPublish);
    }

    @GetMapping("/mediaitem/publish")
    public List<mediaToPublish> getTheassignedItem() {
        return mediaToPublishRepository.findAll();
    }

    @DeleteMapping("/mediaitem/publish/{id}")
    public ResponseEntity<?> deleteAssignedItemByID(@PathVariable(value = "id") Long assignedItemId) {
        mediaToPublish assignedItem = mediaToPublishRepository.findById(assignedItemId)
                .orElseThrow(() -> new NotFoundException("Assigned item " + assignedItemId + " not found"));

        mediaToPublishRepository.delete(assignedItem);

        return ResponseEntity.ok().build();
    }
}

