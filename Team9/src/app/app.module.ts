import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// team imports
import { AgmCoreModule } from '@agm/core';// used for linking with google maps
import { HttpClientModule } from '@angular/common/http';// for linking with the backend node server


//pages
import { UserfiltersComponent } from './userfilters/userfilters.component';
import { MapoutlineareasTESTComponent } from './mapoutlineareas-test/mapoutlineareas-test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './map/map.component';
import { TestpageComponent } from './testpage/testpage.component';

// services
import { SqlapiService } from './sqlapi.service';


@NgModule({
  declarations: [
    AppComponent,
    UserfiltersComponent,
    MapoutlineareasTESTComponent,
    HomepageComponent,
    MapComponent,
    TestpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,// <maybe wrong
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCUsOXj6dTBVQkd7zH7UpkS4TXl_eS4Chc'})
  ],
  providers: [
    SqlapiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
