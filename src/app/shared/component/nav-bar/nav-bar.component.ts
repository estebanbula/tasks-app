import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}

@Component({
  selector: 'tasks-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent {

  public tasksMenu: MenuItem[] = [
    { title: 'Dashboard', route: './tasks/list' }
  ]
}
