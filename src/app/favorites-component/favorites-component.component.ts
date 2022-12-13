import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-favorites-component',
    templateUrl: './favorites-component.component.html',
    styleUrls: ['./favorites-component.component.css'],
})
export class FavoritesComponentComponent implements OnInit {
    favorites:any[] = [];

    constructor(private snackBar: MatSnackBar,private mds: MusicDataService, private route: ActivatedRoute) {
        this.favorites=[];
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.mds.getFavorites(this.mds.FavoritesList).subscribe((data) => {
                console.log(data);
                this.favorites=data.tracks;
            });
        });
    }

    trackIconClick(track:any){
        console.log("trackIconClick");
        console.log(track);
        this.mds.removeFromFavorites(track.id).subscribe((data) => {
            console.log(data);
            this.favorites=data.tracks;
            this.snackBar.open("Removing from Favourites...", "Done", { duration: 1500 });
        });
    }
}
