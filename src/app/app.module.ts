import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponentComponent } from './about-component/about-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NewReleasesComponentComponent } from './new-releases-component/new-releases-component.component';
import { AlbumComponentComponent } from './album-component/album-component.component';
import { ArtistDiscographyComponentComponent } from './artist-discography-component/artist-discography-component.component';
import { FavoritesComponentComponent } from './favorites-component/favorites-component.component';
import { SearchResultsComponentComponent } from './search-results-component/search-results-component.component';

@NgModule({
  declarations: [AppComponent, AboutComponentComponent, NotFoundComponentComponent, NewReleasesComponentComponent, AlbumComponentComponent, ArtistDiscographyComponentComponent, FavoritesComponentComponent, SearchResultsComponentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
