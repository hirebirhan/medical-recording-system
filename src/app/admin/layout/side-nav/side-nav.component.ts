import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../../child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showMenu: boolean;
  routes = childRoutes;
  constructor() { }

  ngOnInit() {
    this.showMenu = false;
  }
}
