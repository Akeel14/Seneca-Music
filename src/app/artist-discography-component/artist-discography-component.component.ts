import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import albumData from '../data/SearchResultsAlbums.json';
import artistData from '../data/SearchResultsArtist.json';
import { MusicDataService } from '../music-data.service';

@Component({
    selector: 'app-artist-discography-component',
    templateUrl: './artist-discography-component.component.html',
    styleUrls: ['./artist-discography-component.component.css']
})
export class ArtistDiscographyComponentComponent implements OnInit {
    albums:any[]=[];
    artist:any=null;

    constructor(private mds: MusicDataService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            let id = params["id"];
            this.mds.getArtistById(id).subscribe((data) => {
                console.log(data);
                this.artist=data;
                this.mds.getAlbumsByArtistId(id).subscribe((data)=>{
                    console.log(data);
                    this.albums=data.items;
                });
            });
        });
    }
}
