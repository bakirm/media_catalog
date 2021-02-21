package restapimediacatalog.rest.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import restapimediacatalog.rest.ColumnAddition.ColumnAddition;

import javax.persistence.*;
import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "mediapublish")
public class MediaPublish extends ColumnAddition {

    @ManyToOne(targetEntity = mediaItem.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(foreignKey = @ForeignKey(name = "media_item_id"), name = "media_item_id", insertable = false, updatable = false, nullable = false)
    @JsonIgnore
    mediaItem mediaItems;

    @OneToMany(mappedBy = "mediapublish")
    @JsonIgnore
    private Set<mediaToPublish> mediaTopublishes = new HashSet<>();


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "expiry_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date expiry_date;

    @Getter
    @Setter
    @JsonProperty("media_item_id")
    @Column(name = "media_item_id", nullable = false)
    private Long media_item_id;

}
