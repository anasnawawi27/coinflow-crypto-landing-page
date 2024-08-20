import { Component, signal } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { RadioInputComponent } from '../radio-input/radio-input.component';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrl: './card-order.component.scss',
  standalone: true,
  imports: [NgIconComponent, RadioInputComponent],
})
export class CardOrderComponent {
  orders = [
    {
      title: 'Limit order',
      description: 'Place purchase orders at the lowest possible price or below.'
    },
    {
      title: 'Stop order',
      description: 'Launch a market buy order at a specified price rise.'
    },
    {
      title: 'Stop limit order',
      description: 'Place a limit buy order when the price hits a set level.'
    },
  ]
  selected = signal(0);

  onValueChange(val: number){
    this.selected.set(val)
  }
}
