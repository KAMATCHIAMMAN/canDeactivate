import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import { CanDectivateGuardService } from './candeactivate-guard.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact', canDeactivate:[CanDectivateGuardService],component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
