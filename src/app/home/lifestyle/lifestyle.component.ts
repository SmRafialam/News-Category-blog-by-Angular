import { Component, OnInit } from '@angular/core';
import { BlogAPIService } from '../../services/blog-api.service';
import { Blog } from '../../blog';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit{

  constructor(private blogService:BlogAPIService){

  }

  ngOnInit(): void {

  }
}
