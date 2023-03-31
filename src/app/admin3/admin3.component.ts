import { Component } from '@angular/core';

@Component({
  selector: 'app-admin3',
  templateUrl: './admin3.component.html',
  styleUrls: ['./admin3.component.scss']
})
export class Admin3Component {
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

