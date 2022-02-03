import { RestoService } from './../resto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  alert: boolean = false;
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private resto: RestoService) {}
  ngOnInit(): void {}
  collection() {
    this.resto.registerUser(this.register.value).subscribe((result) => {
      this.alert = true;
      this.register.reset({});
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
