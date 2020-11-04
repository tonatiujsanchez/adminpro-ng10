import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private _siderbar: SidebarService ) { 
    this.menuItems = _siderbar.menu;    
  }

  ngOnInit(): void {
  }

}
