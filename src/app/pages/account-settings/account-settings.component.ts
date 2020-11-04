import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {


  constructor( private _setting: SettingsService ) { }

  ngOnInit(): void {
    this._setting.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this._setting.changeTheme( theme ); 
  }

}
