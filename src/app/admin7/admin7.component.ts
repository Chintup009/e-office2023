import { Component } from '@angular/core';

@Component({
  selector: 'app-admin7',
  templateUrl: './admin7.component.html',
  styleUrls: ['./admin7.component.scss']
})
export class Admin7Component {

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

