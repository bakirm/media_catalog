package restapimediacatalog.rest.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import restapimediacatalog.rest.ColumnAddition.ColumnAddition;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "artist")
public class Artist extends ColumnAddition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String artistname;
//
//    @OneToMany(targetEntity=mediaItem.class,cascade = CascadeType.ALL , fetch = FetchType.LAZY, mappedBy = "artist")
//    @JsonIgnore
//    private List<mediaItem> mediaItems = new ArrayList<>();

}
