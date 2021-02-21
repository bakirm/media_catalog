package restapimediacatalog.rest.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SearchResultDto {

    private String mediaitemname;
    private String artistname;
    private String genrename;
    private String countryname;
    private String providername;
    private Integer genre_id;
    private Integer country_id;
    private Integer provider_id;
}

