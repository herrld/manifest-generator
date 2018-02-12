import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayEditorComponent } from './array-editor/array-editor.component';
import { StringArrayEditorComponent } from './string-array-editor/string-array-editor.component';
import { NumberArrayEditorComponent } from './number-array-editor/number-array-editor.component';
import { ArrayItemEntity} from './models/array-item-entity';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArrayEditorComponent, StringArrayEditorComponent, NumberArrayEditorComponent],
  exports:[ArrayEditorComponent]
})
export class ArrayEditorModule { }
