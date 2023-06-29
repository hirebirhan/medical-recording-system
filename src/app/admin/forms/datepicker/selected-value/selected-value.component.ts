import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-selected-value',
  templateUrl: './selected-value.component.html',
  styleUrls: ['./selected-value.component.scss']
})
export class SelectedValueComponent {
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  constructor() { }
}
