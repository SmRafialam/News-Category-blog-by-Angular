import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogAPIService } from '../services/blog-api.service';
import { Blog } from '../blog'
import {  Observable, Observer, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  subscription!: Subscription;

  newsSelected = new Subject<Blog[]>();

  categoryName: string = '';
  categories: Blog[] = [];

  //categories !: Observable<any[]>;
  title:any;
  lifeStyles:Blog[] = [];
  health:    Blog[] = [];
  family:    Blog[] = [];
  travel:    Blog[] = [];
  work  :    Blog[] = [];

  constructor(private blogService:BlogAPIService){
    console.log("home");
  }

  ngOnInit(): void {


    //this.customObservable()

    console.log('Home component')


    this.subscription = this.blogService.currentCategory$.subscribe((res:string)=> {
      this.categoryName = res;
      console.log(this.categoryName);
      this.blogService.getNewsList(res).subscribe((data:any)=>{
        this.POSTS = data;
        console.log(data);
        //this.categories = data.articles;
        // this.categoryName = data.articles;
        this.categories = data.articles.filter((res:any)=>{
          console.log(res)
          return res.title.match(this.title);
        })
        console.log(this.title);
      })
    })

    //this.blogService.setCurrentNewsCategory('food');
    // this.blogService.getNewsList('categories').subscribe((data:any)=>{
    //   console.log(data);
    //   this.health = data.articles;
    //   this.lifeStyles = data.articles;
    //   this.family = data.articles;
    //   this.travel = data.articles;
    //   this.work = data.articles;
    //  });

    // this.blogService.getNewsList('lifestyle')
    //               .subscribe((data:any)=>{
    //              // console.log(data);
    //               return this.lifeStyles = data.articles;
    // })
    // this.blogService.getNewsList('health')
    //             .subscribe((data:any)=>{
    //             // console.log(data);
    //              return this.health = data.articles;
    // })
    // this.blogService.getNewsList('family')
    //             .subscribe((data:any)=>{
    //             //console.log(data);
    //             return this.family = data.articles;
    // })
    // this.blogService.getNewsList('travel')
    //           .subscribe((data:any)=>{
    //           //console.log(data);
    //           return this.travel = data.articles;
    // })
    // this.blogService.getNewsList('work')
    //         .subscribe((data:any)=>{
    //         //console.log(data);
    //         return this.work = data.articles;
    // })
  //}

  // customObservable() {
  //   const customObservable = new Observable((observer: Observer<Number>) => {
  //     let i =1;
  //     setInterval(
  //       () => {
  //         observer.next(i);
  //         if(i > 6 ) {
  //           observer.complete()
  //         }
  //         i++;
  //       }, 1000);
  //   });

    // customObservable.subscribe((data: Number) => {
    //   console.log("Next Number: " + data)
    // },
    // (err)=> console.log(err),
    // ()=> console.log('completed'));
  }

  onTableDataChange(event: any) {
    //alert("ok");
    this.page = event;
    this.subscription;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
