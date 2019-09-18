import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//pages
import { UserfiltersComponent } from './userfilters/userfilters.component';




const routes: Routes = [

  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: UserfiltersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
