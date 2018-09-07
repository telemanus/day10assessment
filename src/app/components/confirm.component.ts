import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../services/data.service";
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';


export interface inputValues {
  name: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  
  message: string;
  private result = {};
  inputData: inputValues;


  constructor(private data: DataService) { }

  ngOnInit() {

//    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.currentMessage.subscribe(message => this.message = message)
    this.result = this.data;

    console.log('confirm data: ', this.data.currentMessage.source._value, ' <<<');
    console.log('confirm result: ', this.result);

  
  }

}
