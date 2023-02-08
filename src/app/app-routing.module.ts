import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


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
