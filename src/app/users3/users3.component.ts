import { Component } from '@angular/core';

@Component({
  selector: 'app-users3',
  templateUrl: './users3.component.html',
  styleUrls: ['./users3.component.scss']
})
export class Users3Component {

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

