import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  standalone: true,
  imports: [],
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.scss'
})
export class RadioInputComponent {
  id = input.required<number>();
  checked = input<boolean>(false);

  @Output() valueChange: EventEmitter<number>;

  constructor(){
    this.valueChange = new EventEmitter();
  }

  onChange(event: Event){
    const isChecked = (<HTMLInputElement>event.target).checked;
    if(isChecked) this.valueChange.emit(this.id())
  }
}
