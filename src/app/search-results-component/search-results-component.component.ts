import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-search-results-component',
    templateUrl: './search-results-component.component.html',
    styleUrls: ['./search-results-component.component.css'],
})
export class SearchResultsComponentComponent implements OnInit {
    results:any[] = [];
    searchQuery:string = '';

    constructor(private snackBar: MatSnackBar,private mds: MusicDataService, private route: ActivatedRoute) {
        this.results=[];
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.searchQuery=params["q"];
            this.mds.searchArtist(this.searchQuery).subscribe((data) => {
                console.log(data);
                this.results=data.artists.items;
                this.results=this.results.filter(artist => artist.images.length>0);
            });
        });
    }
}
