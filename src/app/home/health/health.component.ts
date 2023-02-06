import { Component,OnInit } from '@angular/core';
import { BlogAPIService } from '../../services/blog-api.service';
import { Blog } from '../../blog';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit{

  constructor(private blogService:BlogAPIService){

  }

  ngOnInit(): void {

  }
}
