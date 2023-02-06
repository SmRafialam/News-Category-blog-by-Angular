import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var masonry: any;
import { BlogAPIService } from '../services/blog-api.service';
import { Blog } from '../blog'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  lifeStyles:Blog[] = [];
  health:    Blog[] = [];
  family:    Blog[] = [];
  travel:    Blog[] = [];
  work  :    Blog[] = [];

  constructor(private blogService:BlogAPIService){
    console.log("home");
  }

  ngOnInit(): void {
    this.blogService.getNewsList('lifestyle')
                  .subscribe((data:any)=>{
                  console.log(data);
                  return this.lifeStyles = data.articles;
    })
    this.blogService.getNewsList('health')
                .subscribe((data:any)=>{
                 console.log(data);
                 return this.health = data.articles;
    })
    this.blogService.getNewsList('family')
                .subscribe((data:any)=>{
                console.log(data);
                return this.family = data.articles;
    })
    this.blogService.getNewsList('travel')
              .subscribe((data:any)=>{
              console.log(data);
              return this.travel = data.articles;
    })
    this.blogService.getNewsList('work')
            .subscribe((data:any)=>{
            console.log(data);
            return this.work = data.articles;
    })
  }

}
