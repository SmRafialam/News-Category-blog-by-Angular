import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlogAPIService } from '../services/blog-api.service';
import { Blog } from '../blog'
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit{


   // newsSelected = new Subject<Blog[]>();

  // @Output() newsSelected = new EventEmitter<string>();


  categories!: Observable<any[]>;;
  lifeStyles:Blog[] = [];
  health:    Blog[] = [];
  family:    Blog[] = [];
  travel:    Blog[] = [];
  work  :    Blog[] = [];
  // onSelectNews: any;

  constructor(private blogService:BlogAPIService){

  }

  onSelectNews(categoryName:string){
    this.blogService.setCurrentNewsCategory(categoryName);

    // alert("ok");
    //   this.blogService.getNewsList(health).subscribe((data:any)=>{
    //   console.log(data);
    //   this.health = data.articles;
    //   this.lifeStyles = data.articles;
    //   this.family = data.articles;
    //   this.travel = data.articles;
    //   this.work = data.articles;
    //   this.newsSelected.next(data);
    //  });
    }

  ngOnInit(): void {

    // this.blogService.currentCategory$.subscribe(res=> {
    //   console.log('current category', res);
    // })



    // this.blogService.getNewsList('lifestyle')
    //           .subscribe((blog:any)=>{
    //             this.allNews = blog;
    //             console.log(blog)
    //           });



  //  this.selectNews = this.blogService.getNewsList('lifestyle')
  //                 .subscribe((data:any)=>{
  //                 console.log(data);
  //                 this.onSelectNews = data.articles;

  //   })
  }

//   getLifestyle(){
//     this.blogService.getNewsList('news')
//                   .subscribe((data:any)=>{
//                   console.log(data);
//                   return this.lifeStyles = data.articles;

//     })
//   }

//   getHealth(){
//     // alert("ok");
//     this.blogService.getNewsList('health')
//                 .subscribe((data:any)=>{
//                  console.log(data);
//                  return this.health = data.articles;
//     })
//   }

//   getFamily(){
//     // alert("ok");
//     this.blogService.getNewsList('family')
//                 .subscribe((data:any)=>{
//                 console.log(data);
//                 return this.family = data.articles;
//     })
//   }

//   getTravel(){
//     //alert("ok");
//     this.blogService.getNewsList('travel')
//               .subscribe((data:any)=>{
//               console.log(data);
//               return this.travel = data.articles;
//     })
//   }

//   getWork(){
//     //alert("ok");
//     this.blogService.getNewsList('work')
//             .subscribe((data:any)=>{
//             console.log(data);
//             return this.work = data.articles;
//     })
//   }

}
