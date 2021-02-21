package restapimediacatalog.rest.repositories;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import restapimediacatalog.rest.dto.SearchResultDto;
import restapimediacatalog.rest.models.mediaItem;

import java.util.List;

@Repository
public interface MediaitemRepository extends JpaRepository<mediaItem, Long> {

    @Query("SELECT new restapimediacatalog.rest.dto.SearchResultDto(mi.mediaitemname, ar.artistname, ge.genrename, co.countryname, pr.providername, mi.genre_id, mi.country_id, mi.provider_id) FROM mediaItem mi JOIN mi.artist ar JOIN mi.genre ge JOIN mi.country co JOIN mi.provider pr WHERE " +
            "(UPPER(mi.mediaitemname) LIKE CONCAT('%',UPPER(:searchMediaString),'%') " +
            "OR UPPER(ar.artistname) LIKE CONCAT('%',UPPER(:searchArtistString),'%') " +
            "OR UPPER(ge.genrename) LIKE CONCAT('%',UPPER(:searchGenreString),'%') " +
            "OR UPPER(co.countryname) LIKE CONCAT('%',UPPER(:searchCountryString),'%') " +
            "OR UPPER(pr.providername) LIKE CONCAT('%',UPPER(:searchProviderString),'%')) " +
            "AND (:searchGenreId IS NULL OR mi.genre_id = :searchGenreId) " +
            "AND (:searchCountryId IS NULL OR mi.country_id = :searchCountryId) " +
            "AND (:searchProviderId IS NULL OR mi.provider_id = :searchProviderId)"
    )
    List<SearchResultDto> findBySearch(@Param("searchMediaString") String searchMediaString, @Param("searchArtistString") String searchArtistString, @Param("searchGenreString") String searchGenreString, @Param("searchCountryString") String searchCountryString, @Param("searchProviderString") String searchProviderString, @Param("searchGenreId") Integer searchGenreId, @Param("searchCountryId") Integer searchCountryId, @Param("searchProviderId") Integer searchProviderId, @Param("sortby") Sort sortby);


    @Query("SELECT CASE WHEN COUNT(m) > 0 THEN 'true' ELSE 'false' END FROM mediaItem m WHERE m.mediaitemname = ?1")
    public Boolean existsByMediaitemname(String mediaitemname);
}
