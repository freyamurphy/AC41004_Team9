import { Component, OnInit } from '@angular/core';
import { LabelInfo ,test}from '../classmanager.service';
import { ComunicationService } from '../comunication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom = 12;

  userLocation = {lat: 56.4620, lng: -2.9707};
userLocation2:any;
  providers = [
    {
      Id: 0,
      lat: 56.4643,
      lng: -3.0379,
      name: "Ninewells Hospital",
      city: "Dundee",
      streetAddress: "",
      state: "Scotland",
      zipCode: "DD2 1UB",
      rating: "NULL"
    },
    {
      Id: 1,
      name: "Royal Victoria Hospital",
      lat: 56.4628,
      lng: -3.0141,
      city: "Dundee",
      streetAddress: "Jedburgh Road",
      state: "Scotland",
      zipCode: "DD2 1SP",
      rating: "NULL"
    },
    {
      Id: 2,
      lat: 56.4762,
      lng: -2.9856,
      name: "Kings Cross Hospital",
      city: "Dundee",
      streetAddress: "Clepington Road",
      state: "Scotland",
      zipCode: "DD3 9EA",
      rating: "NULL"
    }
  ];

  pricings = [
    {
      providerID: 0,
      conditionCode: 0,
      totalDischarges: 60,
      averageCoveredCharges: 1000.0,
      averageTotalPayments: 1500.0,
      averageMedicarePayments: 999.0,
      year: 2018
    },
    {
      providerID: 1,
      conditionCode: 0,
      totalDischarges: 30,
      averageCoveredCharges: 1020.0,
      averageTotalPayments: 1506.0,
      averageMedicarePayments: 459.0,
      year: 2018
    },
    {
      providerID: 2,
      conditionCode: 0,
      totalDischarges: 10,
      averageCoveredCharges: 100.0,
      averageTotalPayments: 100.0,
      averageMedicarePayments: 100.0,
      year: 2018
    }
  ];

  conditions = [
    {
      code: 0,
      description: "Broken leg"
    }
  ];

  focusLocation = this.userLocation

 labelInfoArray:LabelInfo[] = [];

 labelInfo: LabelInfo;
subscription:any;
  constructor(private interact:ComunicationService) {}

  ngOnInit() {

      this.subscription = this.interact.getfocusedlocation().subscribe(message => { this.userLocation.lat = message.lat;this.userLocation.lng = message.lng;});
    setTimeout( ()=>{

      console.log("mapp component after subscribe");
      console.log(this.subscription);
      console.log(" ");
      console.log(this.userLocation2);
    }, 5000)



    for (let i = 0; i < this.providers.length; i++) {
      this.labelInfo= {
        providerID: this.providers[i].Id,
        providerName:  this.providers[i].name,
        providerLat: this.providers[i].lat,
        providerLng: this.providers[i].lng,
        cost: 0
      }
      this.labelInfoArray[i]=this.labelInfo;
    }

    // for each pricing loop through provider and find the matching id
    for (let i = 0; i < this.pricings.length; i++) {
      for (let j = 0; j <  this.providers.length; j++) {

        if (this.providers[j].Id == this.pricings[i].providerID) {
          this.labelInfoArray[j].cost = (this.pricings[i].averageTotalPayments
            - this.pricings[i].averageMedicarePayments);
        }

      }
    }
  }

  onClick() {
    if (this.focusLocation.lat != 56.4643) {
      this.focusLocation = {lat: 56.4643, lng: -3.0379}
    }
    else {
      this.focusLocation = {lat: 56.4620, lng: -2.9707}
    }
  }

}
interface tester {
    label: any;
}
