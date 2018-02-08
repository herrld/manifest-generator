import { Component, OnInit, Input} from '@angular/core';

import {Database} from '../models/database';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  @Input() dataModel:Database;
  constructor() { }

  ngOnInit() {
  }

}
