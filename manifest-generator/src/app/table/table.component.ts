import { Component, OnInit, Input } from '@angular/core';
import {TablesEntity} from '../models/manifest/manifest-models';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() dataModel:TablesEntity;
  addPerTitle:string = "add Permission";
  ngOnInit() {
  }

}
