import { Component } from '@angular/core';
import { BlogAPIService } from '../services/blog-api.service';
import { Blog } from '../blog'

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {

  lifeStyles:Blog[] = []
  constructor(private blogService:BlogAPIService){

  }

  getLifestyle(){
    this.blogService.getNewsList('lifestyle')
                    .subscribe((data:any)=>{
                      console.log(data);
                      this.lifeStyles = data.articles;

                    })
  }
}
