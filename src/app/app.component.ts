/*********************************************************************************
 * WEB422 – Assignment 05
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students.
 *
 * Name: Akeel Lashley Student ID: 108091208 Date: 2022-03-25
 *
 ********************************************************************************/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'web422-a4';
    searchString = '';

    constructor(private router: Router){

    }

    handleSearch(){
      console.log("handleSearch: "+this.searchString);
      this.router.navigate(['search',this.searchString]);
      this.searchString='';
    }
}
