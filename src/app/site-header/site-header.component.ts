import { Component } from '@angular/core';
import { BlogAPIService } from '../services/blog-api.service';
import { Blog } from '../blog'

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {

  lifeStyles:Blog[] = [];
  health:Blog[] = [];
  family:Blog[] = [];
  travel:Blog[] = [];
  work:Blog[] = [];

  constructor(private blogService:BlogAPIService){

  }

  getLifestyle(){
    this.blogService.getNewsList('lifestyle')
                    .subscribe((data:any)=>{
                      console.log(data);
                      return this.lifeStyles = data.articles;

                    })
  }

  getHealth(){
    // alert("ok");
    this.blogService.getNewsList('health')
                .subscribe((data:any)=>{
                 console.log(data);
                 return this.health = data.articles;

    })
  }

  getFamily(){
    // alert("ok");
    this.blogService.getNewsList('family')
                .subscribe((data:any)=>{
                 console.log(data);
                 return this.family = data.articles;
    })
  }

  getTravel(){
    //alert("ok");
    this.blogService.getNewsList('travel')
    .subscribe((data:any)=>{
     console.log(data);
     return this.travel = data.articles;
})
  }

  getWork(){
    //alert("ok");
    this.blogService.getNewsList('work')
    .subscribe((data:any)=>{
     console.log(data);
     return this.work = data.articles;
})
  }



}
