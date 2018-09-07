import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Observable, of} from  'rxjs';

export interface inputValues {
  name: string;
  email: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  
  //private messageSource = new Observable();
  constructor() { }
  private inputData: inputValues;
  

  changeMessage(message: string) {
    this.messageSource.next(message);
  //  this.currentMessage.pipe(data => data.json())
  //  this.currentMessage.pipe(this.message);
    console.log(message);
  //  return this.currentMessage;
  }

/*
  changeMessage(): Observable<any> {
    this.currentMessage.pipe();
    return this.currentMessage.pipe (map(reponse => this.inputData));
  }
*/
  /*  changeMessage(inputData: inputValues): Observable<any> {
    this.messageSource.subscribe(this.inputData)
  }
  */

}
