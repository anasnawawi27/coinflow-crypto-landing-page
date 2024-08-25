import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugePlayCircle } from '@ng-icons/huge-icons';
import { simpleTether, simpleBitcoinsv, simpleEthereum, simplePolygon, simpleBnbchain, simpleSolana} from '@ng-icons/simple-icons';
import { heroCheckCircleSolid, heroArrowTrendingUpSolid, heroArrowTrendingDownSolid, heroEllipsisVerticalSolid, heroStarSolid, heroChevronDownSolid } from '@ng-icons/heroicons/solid';
import { saxCoin1Outline, saxShieldTickOutline, saxDollarCircleOutline } from '@ng-icons/iconsax/outline';
import { lucideCircleChevronRight } from '@ng-icons/lucide';
import { remixInstagramFill, remixTwitterFill, remixFacebookBoxFill } from '@ng-icons/remixicon';
import { CardChartComponent } from '../components/card-chart/card-chart.component';
import { CardPortfolioComponent } from '../components/card-portfolio/card-portfolio.component';
import { CompaniesComponent } from '../components/companies/companies.component';
import { TableTrendsComponent } from '../components/table-trends/table-trends.component';
import { CardReasonComponent } from '../components/card-reason/card-reason.component';
import { CardOrderComponent } from '../components/card-order/card-order.component';
import { CardMovementComponent } from '../components/card-movement/card-movement.component';
import { CardTradeComponent } from '../components/card-trade/card-trade.component';
import { CardInformationComponent } from '../components/card-information/card-information.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, CardChartComponent, NgIconComponent, CardPortfolioComponent, CompaniesComponent, TableTrendsComponent, CardReasonComponent, CardOrderComponent, CardMovementComponent, CardTradeComponent, CardInformationComponent],
  providers: [ provideIcons({hugePlayCircle, heroCheckCircleSolid, simpleTether, heroArrowTrendingUpSolid, heroArrowTrendingDownSolid, simpleBitcoinsv, heroEllipsisVerticalSolid, simpleEthereum, simplePolygon, simpleBnbchain, simpleSolana, heroStarSolid, saxCoin1Outline, saxShieldTickOutline, saxDollarCircleOutline, heroChevronDownSolid, lucideCircleChevronRight, remixInstagramFill, remixTwitterFill, remixFacebookBoxFill})]
})
export class AppComponent {
  title = 'coinflow-crypto-landing-page';

  footers = [
    {
      title: 'Company',
      list: [
        {
          label: 'Trade',
          link: ''
        },
        {
          label: 'Featured',
          link: ''
        },
        {
          label: 'Market',
          link: ''
        },
        {
          label: 'Portfolio',
          link: ''
        },
      ]
    },
    {
      title: 'Crypto Market',
      list: [
        {
          label: 'Price Chart',
          link: ''
        },
        {
          label: 'Market Analysis',
          link: ''
        },
        {
          label: 'Latest News',
          link: ''
        },
        {
          label: 'ICO (Initial Coin Offering)',
          link: ''
        },
      ]
    },
    {
      title: 'Resource',
      list: [
        {
          label: 'Guide for Beginners',
          link: ''
        },
        {
          label: 'Trading Platform',
          link: ''
        },
        {
          label: 'Digital Wallet',
          link: ''
        },
        {
          label: 'Blockchain Technology',
          link: ''
        },
      ]
    },
    {
      title: 'Community',
      list: [
        {
          label: 'Crypto Discussion Forum',
          link: ''
        },
        {
          label: 'Discord Group',
          link: ''
        },
        {
          label: 'Local Meetup Events',
          link: ''
        },
        {
          label: 'Project Collaboration',
          link: ''
        },
      ]
    },
  ]
}
