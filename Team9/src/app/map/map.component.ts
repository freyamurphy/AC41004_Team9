import { Component, OnInit, OnDestroy } from '@angular/core';
import { LabelInfo ,test}from '../classmanager.service';
import { ComunicationService } from '../comunication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  
  zoom = 12;

  userLocation = {lat: 0, lng: 0};

  providers:any;

  focusLocation = this.userLocation;

  labelInfoArray:LabelInfo[] = [];

  labelInfo: LabelInfo;
  subscription:any;

  top20Providers: any;
  subscription2: Subscription;

  constructor(private interact:ComunicationService) {
    
  }

  ngOnInit() {
    this.interact.getuseraddress().subscribe(
      (res:any) => {
        console.log(res);
      }
    );

    this.top20Providers = [];
    /*this.interact.getuseraddress().subscribe(
      (res:any) => {
        console.log(res);
      }

    )*/
    this.interact.getsearchresults().subscribe(
      (res: any) => {
        this.providers = res;

        this.top20Providers = []
        for ( let i = 0; i < 20; i++) {
          if(this.providers[i]){
            this.top20Providers.push(this.providers[i]);

          }
        }
        
      }
    );

    this.subscription = this.interact.getfocusedlocation().subscribe(
      message => {
        console.log(message.lat);
        console.log(message.lng);

        this.focusLocation.lat = message.lat;
        this.focusLocation.lng = message.lng;
        console.log("changed focsed location");
      });
      this.subscription2 = this.interact.getuserlocation().subscribe(
        message => {
  
          //console.log(message);
          this.userLocation = message;
          console.log(this.userLocation);
        });

    setTimeout( () => {}, 5000)
      }
      ngOnDestroy(): void {
      }
/*
    for (let i = 0; i < this.providers.length; i++) {
      this.labelInfo= {
        providerID: this.providers[i].Id,
        providerName: this.providers[i].name,
        providerLat: this.providers[i].lat,
        providerLng: this.providers[i].lng,
        cost: 0
      }
      this.labelInfoArray[i]=this.labelInfo;
    }
*/
    // for each pricing loop through provider and find the matching id

  



}
