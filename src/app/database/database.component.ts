import { Component, OnInit, Input} from '@angular/core';

import {DatabasesEntity, TablesEntity} from '../models/manifest/manifest-models';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  @Input() dataModel:DatabasesEntity;
  constructor() { }

  ngOnInit() {
  }
  addTable(){
    this.dataModel.tables.push(new TablesEntity());
  }
}
