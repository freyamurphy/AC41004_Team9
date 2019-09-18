import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// team imports
import { AgmCoreModule } from '@agm/core';// used for linking with google maps


//pages

import { UserfiltersComponent } from './userfilters/userfilters.component';
import { MapoutlineareasTESTComponent } from './mapoutlineareas-test/mapoutlineareas-test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './map/map.component';




@NgModule({
  declarations: [
    AppComponent,
    UserfiltersComponent,
    MapoutlineareasTESTComponent,
    HomepageComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUsOXj6dTBVQkd7zH7UpkS4TXl_eS4Chc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
