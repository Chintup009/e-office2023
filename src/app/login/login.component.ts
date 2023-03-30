import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public nameForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  login() {
    let data = {
      "userEmail": this.nameForm.get('email')?.value,
      "Password": this.nameForm.get('password')?.value
    }
    console.log(data);

    axios.get("http://10.104.6.212:1337/api/rtarf-user-register-g1s?filters[userEmail][$eq]=" + this.nameForm.get('email')?.value).then(res => {
      console.log(res.data);
      if (res.data.data.length > 0) {
        let user = res.data.data[0].attributes
        localStorage.setItem("user", JSON.stringify({ firstname: user.firstname, lastname: user.lastname, email: user.userEmail }))
        window.location.href = "/home"
      } else {
        alert("email หรือรหัสผ่านผิด")
      }


    })
  }
}