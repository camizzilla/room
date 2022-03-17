import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { DoorComponent } from './room/components/door/door.component';
import { LightComponent } from './room/components/light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    DoorComponent,
    LightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
