import { Component } from '@angular/core';

@Component({
  selector: 'app-admin6',
  templateUrl: './admin6.component.html',
  styleUrls: ['./admin6.component.scss']
})
export class Admin6Component {
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
