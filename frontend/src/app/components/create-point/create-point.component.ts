import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, icon } from 'leaflet';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-create-point',
  templateUrl: './create-point.component.html',
  styleUrls: ['./create-point.component.scss']
})
export class CreatePointComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    marker: marker([ 46.8523, -121.7603 ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })}),
    center: latLng([ 46.879966, -121.726909 ])
  };

  constructor(service: ApiService) { }

  ngOnInit(): void {



  }

}
