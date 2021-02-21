package restapimediacatalog.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

//import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
//
//@EnableJpaAuditing

@SpringBootApplication
//@ComponentScan("restapimediacatalog.rest.repositories")
//@EnableJpaRepositories
//@ComponentScan(basePackages = { "restapimediacatalog.rest.*" })
//@EntityScan("restapimediacatalog.rest.*")
@EnableJpaAuditing
public class RestApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestApplication.class, args);
    }

}
