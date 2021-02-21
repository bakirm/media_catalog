package restapimediacatalog.rest.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import restapimediacatalog.rest.ColumnAddition.ColumnAddition;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "media_to_publish")
public class mediaToPublish extends ColumnAddition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", insertable=false, updatable=false)
    private Users users;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "media_publish_id", insertable=false, updatable=false)
    private MediaPublish mediapublish;

    @Getter
    @Setter
    @JsonProperty("user_id")
    @Column(name = "user_id", nullable = false)
    private Long user_id;

    @Getter
    @Setter
    @JsonProperty("media_publish_id")
    @Column(name = "media_publish_id", nullable = false)
    private Long media_item_id;

}