import { Component, OnInit } from '@angular/core';
import { Car } from '../map/car';
import { Date } from '../map/date';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  cars: Car[];
  date: Date[];
  zoom: number;
  lat_min: number;
  lat_max: number;
  lng_min: number;
  lng_max: number;
  lat_center: number;
  lng_center: number;
  
  constructor() { }

  ngOnInit() {
    this.zoom = 12;
    this.getDate();
    this.lat_center = 53.7;
    this.lng_center = 30.26; 
    
  }
  
  getDate(){
    var json = '[{"id": "RUABS0001", "model": "Belaz 75131", "plateno": 215, "status": "on", "coords": [{"time": 1508000000, "lat": 53.73158236727538, "lng": 30.268028676509857, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}, {"time": 1508000000, "lat": 54.73158236727538, "lng": 30.268028676509857, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}, {"time": 1508000000, "lat": 55.73158236727538, "lng": 30.268028676509857, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}, {"time": 1508000000, "lat": 56.73158236727538, "lng": 30.268028676509857, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}, {"time": 1508000000, "lat": 57.73158236727538, "lng": 30.268028676509857, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}, {"time": 1508000000, "lat": 58.73158236727538, "lng": 30.268028676509857, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}]},  {"id": "RUABS0002", "model": "Belaz 75131", "plateno": 215, "status": "off", "coords": [{"time": 1508000000, "lat": 51.65739874, "lng": 30.5454646, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}]}, {"id": "RUABS0003", "model": "Belaz 75131", "plateno": 215, "status": "on", "coords": [{"time": 1508000000, "lat": 53.73158236727538, "lng": 30.268028676509857, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}]},  {"id": "RUABS0004", "model": "Belaz 75131", "plateno": 215, "status": "off", "coords": [{"time": 1508000000, "lat": 55.65739874, "lng": 30.4646, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}]}, {"id": "RUABS0005", "model": "Belaz 75131", "plateno": 215, "status": "on", "coords": [{"time": 1508000000, "lat": 51.731538, "lng": 31.269857, "alt": 765.6, "spd": 30.5, "course": 350.8, "hdop": 0.8}]}]'; 
    var date = JSON.parse(json);
    var cars = date;
    for (var i = 0; i < date.length; i++){
      cars[i].id = date[i].id;
      cars[i].model = date[i].model;
      cars[i].plateno = date[i].plateno;
      cars[i].status = date[i].status;
      cars[i].coords = date[i].coords[0];
    }
    this.cars = cars;
    this.date = date;
  }

  onMapReady(event){
    var self = this;
    setInterval(function(){
      self.getDate();
    }, 1000);
  }
  
  onZoomChange(zoom){
    this.zoom = zoom;
  }
  
  onBoundsChange(bounds){
    this.lat_min = bounds.f.b;
    this.lat_max = bounds.f.f;
    this.lng_min = bounds.b.b;
    this.lng_max = bounds.b.f;
  }
  
  onCarClicked(lat, lng){
    if(this.lat_center == lat && this.lng_center == lng){
      this.lat_center += 0.000000000001;
      this.lng_center += 0.000000000001; 
    }
    else{
      this.lat_center = lat;
      this.lng_center = lng;
    }
    this.zoom = 14;
  }
}
