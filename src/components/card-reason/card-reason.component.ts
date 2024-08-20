import { Component, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-card-reason',
  templateUrl: './card-reason.component.html',
  styleUrl: './card-reason.component.scss',
  standalone: true,
  imports: [NgIconComponent],
})
export class CardReasonComponent {

  icon = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
