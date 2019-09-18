import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//pages
import { UserfiltersComponent } from './userfilters/userfilters.component';
import { MapoutlineareasTESTComponent } from './mapoutlineareas-test/mapoutlineareas-test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './map/map.component';
import { TestpageComponent } from './testpage/testpage.component';



const routes: Routes = [

  { path: '',   redirectTo: 'testmap', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},
  { path: 'testmap', component: MapoutlineareasTESTComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
