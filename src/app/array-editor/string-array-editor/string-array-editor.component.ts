import { Component, OnInit } from '@angular/core';
import { ArrayItemEntity} from '../models/array-item-entity';

@Component({
  selector: 'app-string-array-editor',
  templateUrl: './string-array-editor.component.html',
  styleUrls: ['./string-array-editor.component.css']
})
export class StringArrayEditorComponent implements OnInit {
  tartgetItems:ArrayItemEntity<string>[];
  constructor() { }

  ngOnInit() {
  }

}
