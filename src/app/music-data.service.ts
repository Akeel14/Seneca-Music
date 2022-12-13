import { HttpClient, HttpParams  } from '@angular/common/http';
import { SpotifyTokenService } from './spotify-token.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  FavoritesList: Array<any> = [];

  constructor(private spotifyToken: SpotifyTokenService, private http: HttpClient) { }

  getNewReleases(): Observable<SpotifyApi.ListOfNewReleasesResponse> {
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
          return this.http.get<SpotifyApi.ListOfNewReleasesResponse>(`https://api.spotify.com/v1/browse/new-releases`, { headers: { "Authorization": `Bearer ${token}` } });
      }));
  }

  getArtistById(id:any): Observable<SpotifyApi.SingleArtistResponse> {
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
          return this.http.get<SpotifyApi.SingleArtistResponse>(`https://api.spotify.com/v1/artists/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
      }));
      //return this.http.get<SpotifyApi.SingleArtistResponse>(`https://api.spotify.com/v1/artists/${id}`);
  }

  getAlbumsByArtistId(id:any): Observable<SpotifyApi.ArtistsAlbumsResponse> {
      let params = new HttpParams();
      //params = params.append('include_groups', album || single);
      params = params.append('include_groups','album,single');
      params = params.append('limit','50');
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
          return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(`https://api.spotify.com/v1/artists/${id}/albums`, { params:params,headers: { "Authorization": `Bearer ${token}` } });
      }));
      //return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(`https://api.spotify.com/v1/artists/${id}/albums`, {params: params})
  }

  getAlbumById(id:any): Observable<SpotifyApi.SingleAlbumResponse> {
      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
          return this.http.get<SpotifyApi.SingleAlbumResponse>(`https://api.spotify.com/v1/albums/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
      }));
  }

  searchArtist(searchString:any, type: string = 'artist'): Observable<SpotifyApi.ArtistSearchResponse> {
      let params = new HttpParams();
      params = params.append('q', searchString);
      params = params.append('type',type);
      params = params.append('limit', 50);

      return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
          return this.http.get<SpotifyApi.ArtistSearchResponse>(`https://api.spotify.com/v1/search`, { params: params, headers: { "Authorization": `Bearer ${token}` } });
      }));
  }

  addToFavorites(id:any): boolean {
      if (id) {
          if (this.FavoritesList.length < 50 ) {
              this.FavoritesList.push(id);
              return true;
          }
      }
      return false;
  }

  removeFromFavorites(id:any): Observable<any> {
      for (let a=0;a<this.FavoritesList.length;a++){
          if (this.FavoritesList[a]==id){
              this.FavoritesList.splice(a,1);
              break;
          }
      }
      return this.getFavorites(this.FavoritesList);
  }

  getFavorites(favoritesList: Array<any>): Observable<any> {
      let params = new HttpParams();
      params = params.append('ids', favoritesList.join());
      if(this.FavoritesList.length > 0) {
          return this.spotifyToken.getBearerToken().pipe(mergeMap(token=>{
              return this.http.get<any>(`https://api.spotify.com/v1/tracks`, { params:params,headers: { "Authorization": `Bearer ${token}` } });
          }));
      } else {
          return new Observable(o=>{o.next([])});
      }
  }
}
