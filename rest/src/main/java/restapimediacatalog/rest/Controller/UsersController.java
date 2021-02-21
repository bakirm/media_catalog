package restapimediacatalog.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restapimediacatalog.rest.exception.NotFoundException;
import restapimediacatalog.rest.models.Users;
import restapimediacatalog.rest.repositories.UsersRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UsersController {
    @Autowired
    UsersRepository usersRepository;

    @GetMapping("/user")
    public List<Users> getAllGenres() {
        return usersRepository.findAll();
    }

     @RequestMapping(value = "/user", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
    public Users assignMediaItem(@Valid @RequestBody Users user) throws Exception {

        if(usersRepository.existsByUsername(user.getUsername())) {
            throw new Exception("user_exists");

        }

        return usersRepository.save(user);
    }


    @GetMapping("/user/{id}")
    public Users getUserbyId(@PathVariable(value = "id") Long userId) {
        return usersRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("User " + userId + " not found"));
    }


    @PutMapping("/user/{id}")
    public Users updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody Users users) {
        return usersRepository.findById(userId).map(username -> {
            username.setUsername(users.getUsername());
            return usersRepository.save(username);
        }).orElseThrow(() -> new NotFoundException("User " + userId + " not found"));
    }


    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteGenrebyId(@PathVariable(value = "id") Long userId) {
        Users username = usersRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("User " + userId + " not found"));

        usersRepository.delete(username);

        return ResponseEntity.ok().build();
    }


}
