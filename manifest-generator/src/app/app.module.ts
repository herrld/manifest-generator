import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ManifestComponent } from './manifest/manifest.component';
import { DatabaseComponent } from './database/database.component';


@NgModule({
  declarations: [
    AppComponent,
    ManifestComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
