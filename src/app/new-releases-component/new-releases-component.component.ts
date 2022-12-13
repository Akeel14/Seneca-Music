import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../data/NewReleasesAlbums.json';
import { MusicDataService } from '../music-data.service';

@Component({
    selector: 'app-new-releases-component',
    templateUrl: './new-releases-component.component.html',
    styleUrls: ['./new-releases-component.component.css'],
})
export class NewReleasesComponentComponent implements OnInit {
    releases:any[] = [];

    constructor(private mds: MusicDataService, private route: ActivatedRoute) {
        this.releases=[];
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.mds.getNewReleases().subscribe((data) => {
                console.log(data);
                this.releases=data.albums.items;
            });
        });
    }
}
