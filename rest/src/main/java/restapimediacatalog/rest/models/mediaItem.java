package restapimediacatalog.rest.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import restapimediacatalog.rest.ColumnAddition.ColumnAddition;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "mediaitems")
public class mediaItem extends ColumnAddition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mediaitemname;

    @ManyToOne(targetEntity = Artist.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(foreignKey = @ForeignKey(name = "artist_id"), insertable = false, updatable = false, nullable = false)
    @JsonIgnore
    private Artist artist;

    @ManyToOne(targetEntity = Country.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(foreignKey = @ForeignKey(name = "country_id"), insertable = false, updatable = false, nullable = false)
    @JsonIgnore
    private Country country;

    @ManyToOne(targetEntity = Genre.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(foreignKey = @ForeignKey(name = "genre_id"), insertable = false, updatable = false, nullable = false)
    @JsonIgnore
    private Genre genre;

    @ManyToOne(targetEntity = Provider.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(foreignKey = @ForeignKey(name = "provider_id"), insertable = false, updatable = false, nullable = false)
    @JsonIgnore
    private Provider provider;

    @OneToMany(targetEntity=MediaPublish.class,cascade = CascadeType.ALL , fetch = FetchType.LAZY, mappedBy = "mediaItems")
    @JsonIgnore
    private List<MediaPublish> MediaPublishes = new ArrayList<>();


    @Getter
    @Setter
    @JsonProperty("artist_id")
    @Column(name = "artist_id", nullable = false)
    private Long artist_id;

    @Getter
    @Setter
    @JsonProperty("country_id")
    @Column(name = "country_id", nullable = false)
    private Integer country_id;

    @Getter
    @Setter
    @JsonProperty("genre_id")
    @Column(name = "genre_id", nullable = false)
    private Integer genre_id;

    @Getter
    @Setter
    @JsonProperty("provider_id")
    @Column(name = "provider_id", nullable = false)
    private Integer provider_id;


}