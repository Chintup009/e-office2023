import { Component } from '@angular/core';

@Component({
  selector: 'app-users4',
  templateUrl: './users4.component.html',
  styleUrls: ['./users4.component.scss']
})
export class Users4Component {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    //ความกว้างของ slide menu
    const mySidenav = document.getElementById(
      'mySidenav',
    ) as HTMLInputElement | null;

    if (mySidenav != null) {
      mySidenav.style.width = "276px";
    }
  }

  closeNav() {
    const mySidenav = document.getElementById(
      'mySidenav',
    ) as HTMLInputElement | null;

    if (mySidenav != null) {
      mySidenav.style.width = "0";
    }
  }
}
