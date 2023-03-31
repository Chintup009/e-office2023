import { Component } from '@angular/core';

@Component({
  selector: 'app-admin4',
  templateUrl: './admin4.component.html',
  styleUrls: ['./admin4.component.scss']
})
export class Admin4Component {

  constructor() { }

  ngOnInit(): void {
  }

  closeNav() {
    const mySidenav = document.getElementById(
      'mySidenav',
    ) as HTMLInputElement | null;

    if (mySidenav != null) {
      mySidenav.style.width = "276";
    }
  }

  openNav() {
    //ความกว้างของ slide menu
    const mySidenav = document.getElementById(
      'mySidenav',
    ) as HTMLInputElement | null;

    if (mySidenav != null) {
      mySidenav.style.width = "";
    }
  }
}

