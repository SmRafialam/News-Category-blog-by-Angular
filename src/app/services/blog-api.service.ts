import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogAPIService {

  constructor(private http:HttpClient) {

   }

   getNewsList(newsType:string){
    const url = `https://newsapi.org/v2/everything?q=${newsType}&from=2023-01-06&sortBy=publishedAt&apiKey=de22d657d2bd45349e56be3e5ab958b0`;
    return this.http.get(url);
   }
}
