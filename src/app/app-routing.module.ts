import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyComponent } from './home/family/family.component';
import { HealthComponent } from './home/health/health.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './home/lifestyle/lifestyle.component';
import { TravelComponent } from './home/travel/travel.component';
import { WorkComponent } from './home/work/work.component';

const routes: Routes = [
  // {path:"home",      component:HomeComponent},
  // {path:"lifestyle", component:LifestyleComponent},
  // {path:"health",    component:HealthComponent},
  // {path:"family",    component:FamilyComponent},
  // {path:"travel",    component:TravelComponent},
  // {path:"work",      component:WorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
