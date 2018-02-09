import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ManifestComponent } from './manifest/manifest.component';
import { DatabaseComponent } from './database/database.component';
import { TableComponent } from './table/table.component';
import { StringArrayEditorComponent } from './string-array-editor/string-array-editor.component';
import { StringEntityComponent } from './string-array-editor/string-entity/string-entity.component';
import { ViewsComponent } from './views/views.component';


@NgModule({
  declarations: [
    AppComponent,
    ManifestComponent,
    DatabaseComponent,
    TableComponent,
    StringArrayEditorComponent,
    StringEntityComponent,
    ViewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
