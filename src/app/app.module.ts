import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisatoComponent } from './misato/misato.component';
import { HttpClientModule } from '@angular/common/http';
import { KatsuragiService } from './services/katsuragi.service';
import { PenPenDirective } from './directives/pen-pen.directive';

@NgModule({
  declarations: [
    AppComponent,
    MisatoComponent,
    PenPenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    KatsuragiService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
