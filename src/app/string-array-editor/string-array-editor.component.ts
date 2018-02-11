import { Component, OnInit, Input } from '@angular/core';
import {StringEntity,StringArrayHelper} from '../models/manifest/manifest-models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-string-array-editor',
  templateUrl: './string-array-editor.component.html',
  styleUrls: ['./string-array-editor.component.css']
})
export class StringArrayEditorComponent implements OnInit {
  private _targetCollection: string[];
  @Input() addLabel:string;
  @Input() 
  get targetCollection(): string[]{
    return this._targetCollection;
  }
  set targetCollection(value:string[]){
    this._targetCollection=value;
    this.entities = [];
    for(let i = 0; i < this._targetCollection.length; i++)
    {
      this.entities.push({value:this._targetCollection[i],index:i});
    }
  }
  entities:StringEntity[] = [];
  constructor() { }

  ngOnInit() {
  }
  removeItem(index:number){
    this.targetCollection.splice(index,1);
    this.entities.splice(index,1);
    for(let i of this.entities)
    {
      i.index--;
    }
  }
  addItem(){
    this.entities.push({value:"",index:this.targetCollection.length});
    this.targetCollection.push("");
    
  }
  updateEntry(update:StringEntity){
    this.targetCollection[update.index]=update.value;
  }

}
