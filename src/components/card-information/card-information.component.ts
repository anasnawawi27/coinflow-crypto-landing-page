import { Component, computed, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrl: './card-information.component.scss',
  standalone: true,
  imports: [NgIconComponent],
})
export class CardInformationComponent {
  category = input.required<string>()
  title = input.required<string>()
  image = input.required<string>()
  imagePath = computed(() => {
    return 'assets/images/informations/' + this.image()
  })
}
