import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReleasesComponentComponent } from './new-releases-component/new-releases-component.component';
import { ArtistDiscographyComponentComponent } from './artist-discography-component/artist-discography-component.component';
import { AlbumComponentComponent } from './album-component/album-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { FavoritesComponentComponent } from './favorites-component/favorites-component.component';
import { SearchResultsComponentComponent } from './search-results-component/search-results-component.component';

const routes: Routes = [
  { path: 'newReleases', component: NewReleasesComponentComponent },
  { path: 'artist/:id', component: ArtistDiscographyComponentComponent },
  { path: 'album/:id', component: AlbumComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'favorites', component: FavoritesComponentComponent },
  { path: 'search/:q', component: SearchResultsComponentComponent },
  { path: '', redirectTo: '/newReleases', pathMatch: 'full' },
  { path: '**', component: NotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
