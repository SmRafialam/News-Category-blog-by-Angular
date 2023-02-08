import { Component, OnInit } from '@angular/core';
import { BlogAPIService } from './services/blog-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blogAPI';

  constructor(
    private blogApiService: BlogAPIService
  ) {}

  ngOnInit() {
    this.blogApiService.setCurrentNewsCategory('health');



  }
}
