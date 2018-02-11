import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {StringEntity} from '../../models/manifest/manifest-models';
@Component({
  selector: 'app-string-entity',
  templateUrl: './string-entity.component.html',
  styleUrls: ['./string-entity.component.css']
})
export class StringEntityComponent implements OnInit {
  private _entity:StringEntity;
  @Input() 
  set entity(value:StringEntity){
    this._entity = value;
  }
  get entity():StringEntity{
    return this._entity;
  }
  private _proxyValue:string;
  set proxyValue(value:string){
    this._proxyValue = value;
    this.entity.value = value;
    this.updated.emit(this.entity);
  }
  constructor() { }
 
  ngOnInit() {
  }
  changed(){
    this.updated.emit(this.entity);
  }
  @Output() updated: EventEmitter<StringEntity> = new EventEmitter();
}
