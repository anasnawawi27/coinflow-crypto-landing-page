import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

export type PortfolioList = {
  icon:string;
  code: string;
  name:string;
  color: string;
  graph: {
    type: 'up' | 'down';
    percent: number
  },
  value:number;
  total:number;
}

@Component({
  selector: 'app-card-portfolio',
  templateUrl: './card-portfolio.component.html',
  styleUrl: './card-portfolio.component.scss',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
})
export class CardPortfolioComponent {

  list: PortfolioList[] = [
    {
      icon: 'simpleEthereum',
      code: 'ETH',
      name: 'Ethereum',
      color: 'customBlue',
      graph: {
        type: 'up',
        percent: 24
      },
      value:0.8419,
      total:4371.98,
    },
    {
      icon: 'simpleTether',
      code: 'USDT',
      name: 'Tether',
      color: 'customGreen',
      graph: {
        type: 'up',
        percent: 10
      },
      value:0.7481,
      total:3314.46,
    },
    {
      icon: 'simpleBitcoinsv',
      code: 'BTC',
      name: 'Bitcoin',
      color: 'customOrange',
      graph: {
        type: 'down',
        percent: 12
      },
      value:0.6410,
      total:3461.13,
    },
    {
      icon: 'simplePolygon',
      code: 'MATIC',
      name: 'Polygon',
      color: 'customPurple',
      graph: {
        type: 'up',
        percent: 30
      },
      value:0.8814,
      total:2135.35,
    },
  ]

}
