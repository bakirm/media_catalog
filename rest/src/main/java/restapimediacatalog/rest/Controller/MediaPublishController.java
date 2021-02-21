package restapimediacatalog.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import restapimediacatalog.rest.models.MediaPublish;
import restapimediacatalog.rest.repositories.MediaPublishRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MediaPublishController {

    @Autowired
    MediaPublishRepository mediaPublishRepository;

    @PostMapping("/mediaitem/assign")
    public MediaPublish assignMediaItem(@Valid @RequestBody MediaPublish assignment) {
        return mediaPublishRepository.save(assignment);
    }

    @GetMapping("/mediaitem/assigned")
    public List<MediaPublish> getTheassignedItem() {
        return mediaPublishRepository.findAll();
    }


    @GetMapping("/mediaitem/assigned/getExpired")
    public List<MediaPublish> getExpiredItem() {
        return mediaPublishRepository.FindByExpiryDate();
    }
}
