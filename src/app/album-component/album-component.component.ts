import { Component, OnInit, Inject} from '@angular/core';
import albumData from '../data/SearchResultsAlbum.json';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-album-component',
    templateUrl: './album-component.component.html',
    styleUrls: ['./album-component.component.css'],
})
export class AlbumComponentComponent implements OnInit {
    album:any = null;

    constructor(private snackBar: MatSnackBar,private mds: MusicDataService, private route: ActivatedRoute){}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            let id = params["id"];
            this.mds.getAlbumById(id).subscribe((data) => {
                console.log(data);
                this.album = data;
            });
        });
    }

    trackIconClick(track:any){
        console.log("trackIconClick");
        console.log(track);
        if (this.mds.addToFavorites(track.id)){
            console.log("true");
            this.snackBar.open("Adding to Favorites...", "Done", { duration: 1500 });
        }else{
            console.log("false");
        }
    }
}
