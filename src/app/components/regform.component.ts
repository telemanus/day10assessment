import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {DataService} from "../services/data.service";

export interface inputValues {
  name: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  message: string;
  inputData: inputValues;
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";


  constructor(
    private router: Router,
    route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)

  }

  processReg(form: NgForm) {
    console.log('form: ', form.value.name);
    this.inputData = {
      name: form.value.name, 
      email: form.value.email, 
      address: form.value.address
    }
    this.data.changeMessage(`Hello from Siblingform.value${form.value.name}`)
//    this.data.changeMessage(`Hello from Siblingform.value${this.inputData}`)
    console.log("inputData >>>>>",this.inputData)
    this.router.navigate(['/confirm']);
    form.resetForm();
  }

}
