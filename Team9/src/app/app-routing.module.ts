import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//pages
import { UserfiltersComponent } from './userfilters/userfilters.component';
import { MapoutlineareasTESTComponent } from './mapoutlineareas-test/mapoutlineareas-test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './map/map.component';
import { TestpageComponent } from './testpage/testpage.component';
import { HospitalselecterComponent } from './hospitalselecter/hospitalselecter.component';




const routes: Routes = [

  { path: '',   redirectTo: 'testpage', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},
  { path: 'testmap', component: MapoutlineareasTESTComponent},
  { path: 'testpage', component: TestpageComponent},
  { path: 'histeve', component: UserfiltersComponent},
  { path: 'hospital', component: HospitalselecterComponent},
  { path: 'map', component: MapComponent},
  { path: 'testpage', component: TestpageComponent},
  { path: 'userfilters', component: UserfiltersComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
