import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {Manifest} from '../models/manifest/manifest-models';
import {DatabasesEntity} from '../models/manifest/manifest-models';
@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css']
})
export class ManifestComponent implements OnInit {

  dataModel:Manifest = new Manifest();
  generated:boolean = false;
  file;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dataModel.databases.push(new DatabasesEntity());
  }

  gen(){
    let asFile = JSON.stringify(this.dataModel);
    this.file= this.sanitizer.bypassSecurityTrustUrl("data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.dataModel)));
    this.generated = true;
    
  }

}
