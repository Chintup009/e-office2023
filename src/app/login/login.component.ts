import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData: any;
  actionNumber: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    //ความกว้างของ slide menu
    //document.getElementById("mySidenav").style.width = "300px";
  }

  closeNav() {
    //document.getElementById("mySidenav").style.width = "0";
  }
}
