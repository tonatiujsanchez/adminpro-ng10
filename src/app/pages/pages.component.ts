import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function initFunctions();


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  constructor( private _settings: SettingsService ) { }

  ngOnInit(): void {
    initFunctions();
  }

}
