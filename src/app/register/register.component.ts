import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

// สร้างฟอร์มไว้รับค่าหน้าบ้าน html
export class RegisterComponent {
  public nameForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      firstname: '',
      lastname: '',
      rtarfId: '',
      email: '',
      password: '',
    });
  }

  register() {
    let data = {
      "firstname": this.nameForm.get('firstname')?.value,
      "lastname": this.nameForm.get('lastname')?.value,
      "identificationNumber": this.nameForm.get('rtarfId')?.value,
      "userEmail": this.nameForm.get('email')?.value,
      "Password": this.nameForm.get('password')?.value
    }
    console.log(data);

    axios.post("http://10.104.6.212:1337/api/rtarf-user-register-g1s", { data: data }).then(res => {        //เพิ่มข้อมูล
      console.log(res.data);
      this.nameForm.reset();        //รีเซทข้อมูลที่ใส่ไว้ให้ ฟอร์มว่าง
    })
  }
}
