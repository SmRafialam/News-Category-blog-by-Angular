import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogAPIService {

  private currentNewsCategory = new BehaviorSubject<string>('');

  constructor(private http:HttpClient) {

   }

   getNewsList(newsType:string): Observable<any>{

    // const url = `https://newsapi.org/v2/everything?q=${newsType}&from=2023-01-10&sortBy=publishedAt&apiKey=de22d657d2bd45349e56be3e5ab958b0`;
    const url = `https://newsapi.org/v2/everything?q=${newsType}&from=2024-07-01&sortBy=popularity&apiKey=7a0d9dc8108e4bb2b10fd38d5689d06d`;

    return this.http.get(url);
   }

   setCurrentNewsCategory(text: string) {
    this.currentNewsCategory.next(text);
   }

   get currentCategory$() {
    return this.currentNewsCategory;
   }


}
