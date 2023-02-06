import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var masonry: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(){
    console.log("home");
  }

  ngOnInit(): void {
    // main();
    // masonry();
    // console.log(masonry);
  }
}
