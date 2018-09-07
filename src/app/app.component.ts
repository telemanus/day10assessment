import { Component, EventEmitter, Output, Input } from '@angular/core';

export interface formDetail {
  name: string;
  email: string;
  address: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day10assessment';

}
