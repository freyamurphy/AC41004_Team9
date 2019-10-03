import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';



// team imports

import { AgmCoreModule } from '@agm/core';// used for linking with google maps

import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { HttpClientModule } from '@angular/common/http';// for linking with the backend node server

import { HttpModule } from '@angular/http';

import {MatSliderModule} from '@angular/material/slider'; //For slidebar

import {MatListModule} from '@angular/material/list';

import {MatSelectModule} from '@angular/material/select';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgxPaginationModule} from 'ngx-pagination';

import {MatButtonModule} from '@angular/material/button';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatInputModule} from '@angular/material';

import {MatTooltipModule} from '@angular/material/tooltip';

//pages

import { UserfiltersComponent } from './userfilters/userfilters.component';

import { MapoutlineareasTESTComponent } from './mapoutlineareas-test/mapoutlineareas-test.component';

import { HomepageComponent } from './homepage/homepage.component';

import { MapComponent } from './map/map.component';

import { TestpageComponent } from './testpage/testpage.component';

import { UilocationfinderComponent } from './uilocationfinder/uilocationfinder.component';

import { HospitalselecterComponent } from './hospitalselecter/hospitalselecter.component';
import { RangesliderComponent } from './UserFilters2/rangeslider/rangeslider.component';

import { SearchbarComponent } from './UserFilters2/searchbar/searchbar/searchbar.component';

import { SelectComponent } from './UserFilters2/select/select/select.component';

import { SearchComponent } from './search/search.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatDialogModule} from '@angular/material/dialog';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
// services

import { SqlapiService } from './sqlapi.service';

import { ComunicationService } from './comunication.service';

import { GeolocationComponent } from './geolocation/geolocation.component';


import {MatTableModule} from '@angular/material/table';
import { ManuallocationComponent } from './manuallocation/manuallocation/manuallocation.component';

import { UserhelpComponent } from './help/userhelp/userhelp.component';

import { BackComponent } from './back/back/back.component';
import { DistanceSorterComponent } from './distance-sorter/distance-sorter.component';
//test



@NgModule({
  declarations: [
    AppComponent,
    UserfiltersComponent,
    MapoutlineareasTESTComponent,
    HomepageComponent,
    MapComponent,
    TestpageComponent,
    SearchComponent,

    UilocationfinderComponent,
    HospitalselecterComponent,
    RangesliderComponent,
    SearchbarComponent,
    SelectComponent,
    GeolocationComponent,
    ManuallocationComponent,
    UserhelpComponent,
    BackComponent,
    DistanceSorterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,// <maybe wrong
    MatSliderModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,

    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,

    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgxSelectModule,
    MatCheckboxModule,
 
    MatExpansionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8',
      libraries: ['geometry', 'places']
    }),
    ReactiveFormsModule,
    AgmJsMarkerClustererModule
  ],
  providers: [
    SqlapiService,
    ComunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
