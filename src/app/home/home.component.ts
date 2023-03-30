import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }

  ngOnInit(): void {
  }

  closeNav() {
    const mySidenav = document.getElementById(
      'mySidenav',
    ) as HTMLInputElement | null;

    if (mySidenav != null) {
      mySidenav.style.width = "0";
    }
  }

  openNav() {
    //ความกว้างของ slide menu
    const mySidenav = document.getElementById(
      'mySidenav',
    ) as HTMLInputElement | null;

    if (mySidenav != null) {
      mySidenav.style.width = "300px";
    }
  }
}