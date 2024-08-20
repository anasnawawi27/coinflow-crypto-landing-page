import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

export type CryptoList = {
  color: string;
  icon: string;
  name: string;
  code: string;
  price: number;
  graph: {
    type: 'up' | 'down',
    percent: number,
  },
  volume: number;
  market_cap: number
}
@Component({
  selector: 'app-table-trends',
  templateUrl: './table-trends.component.html',
  styleUrl: './table-trends.component.scss',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
})
export class TableTrendsComponent {

  list: CryptoList[] = [
    {
      color: 'customOrange',
      icon: 'simpleBitcoinsv',
      name: 'Bitcoin',
      code: 'BTC',
      price: 66148.92,
      graph: {
        type: 'up',
        percent: 1.41,
      },
      volume: 21814.28,
      market_cap: 418964878
    },
    {
      color: 'customBlue',
      icon: 'simpleEthereum',
      name: 'Ethereum',
      code: 'ETH',
      price: 3481.87,
      graph: {
        type: 'down',
        percent: 0.15,
      },
      volume: 12248.71,
      market_cap: 319964192
    },
    {
      color: 'customGreen',
      icon: 'simpleTether',
      name: 'Tether',
      code: 'USDT',
      price: 6144.44,
      graph: {
        type: 'down',
        percent: 0.08,
      },
      volume: 10338.10,
      market_cap: 124914109
    },
    {
      color: 'customYellow',
      icon: 'simpleBnbchain',
      name: 'BNB',
      code: 'BNB',
      price: 578.91,
      graph: {
        type: 'up',
        percent: 0.86,
      },
      volume: 15719.81,
      market_cap: 209877124
    },
    {
      color: 'customPurple',
      icon: 'simplePolygon',
      name: 'Polygon',
      code: 'MATIC',
      price: 419.13,
      graph: {
        type: 'down',
        percent: 0.13,
      },
      volume: 8471.43,
      market_cap: 198184576
    },
    {
      color: 'customBlue',
      icon: 'simpleSolana',
      name: 'Solana',
      code: 'SOL',
      price: 175.92,
      graph: {
        type: 'up',
        percent: 0.83,
      },
      volume: 11722.10,
      market_cap: 204814918
    },
  ]
}
