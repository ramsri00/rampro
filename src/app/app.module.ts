import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';

import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [AppComponent, CameraComponent],
  imports: [BrowserModule, FormsModule, WebcamModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
