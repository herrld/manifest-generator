import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayEditorComponent } from './array-editor/array-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArrayEditorComponent],
  exports:[ArrayEditorComponent]
})
export class ArrayEditorModule { }
