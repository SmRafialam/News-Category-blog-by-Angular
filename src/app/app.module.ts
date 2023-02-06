import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogAPIService } from './services/blog-api.service';
import { LifestyleComponent } from './home/lifestyle/lifestyle.component';
import { HealthComponent } from './home/health/health.component';
import { FamilyComponent } from './home/family/family.component';
import { TravelComponent } from './home/travel/travel.component';
import { WorkComponent } from './home/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    HomeComponent,
    FooterComponent,
    LifestyleComponent,
    HealthComponent,
    FamilyComponent,
    TravelComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BlogAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
