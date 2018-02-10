import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7PgcchUSlTMmAn9iE9kTAkFu6_eFCBO8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
