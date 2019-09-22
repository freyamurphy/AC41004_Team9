import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// team imports
import { AgmCoreModule } from '@agm/core';// used for linking with google maps
import { HttpClientModule } from '@angular/common/http';// for linking with the backend node server
import { HttpModule } from '@angular/http';
import {MatSliderModule} from '@angular/material/slider'; //For slidebar
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';


//pages
import { UserfiltersComponent } from './userfilters/userfilters.component';
import { MapoutlineareasTESTComponent } from './mapoutlineareas-test/mapoutlineareas-test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './map/map.component';
import { TestpageComponent } from './testpage/testpage.component';

// services
import { SqlapiService } from './sqlapi.service';
import { UilocationfinderComponent } from './uilocationfinder/uilocationfinder.component';
import { HospitalselecterComponent } from './hospitalselecter/hospitalselecter.component';
import { RangesliderComponent } from './UserFilters2/rangeslider/rangeslider.component';
import { SearchbarComponent } from './UserFilters2/searchbar/searchbar/searchbar.component';



@NgModule({
  declarations: [
    AppComponent,
    UserfiltersComponent,
    MapoutlineareasTESTComponent,
    HomepageComponent,
    MapComponent,
    TestpageComponent,
    UilocationfinderComponent,
    HospitalselecterComponent,
    RangesliderComponent,
    SearchbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,// <maybe wrong
    MatSliderModule,
    MatListModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({apiKey: ''})
  ],
  providers: [
    SqlapiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
