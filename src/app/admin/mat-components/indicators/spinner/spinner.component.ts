import {Component} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent  {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  constructor() { }
}
