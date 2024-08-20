import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, ViewEncapsulation, input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexLegend,
  ApexYAxis,
  ApexGrid,
  ApexFill,
} from "ng-apexcharts";
import { NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  grid: ApexGrid;
  fill: ApexFill;
};

export type GraphBadge = {
  type: 'up' | 'down',
  percent: number,
  value: number
}

export type Crypto = {
  icon:string;
  name:string;
  code:string;
  color:string;
}

@Component({
  selector: 'app-card-chart',
  standalone: true,
  templateUrl: './card-chart.component.html',
  styleUrl: './card-chart.component.scss',
  imports: [NgApexchartsModule, NgIconComponent, NgClass, CommonModule, NgIf],
  encapsulation: ViewEncapsulation.None
})
export class CardChartComponent {

  crypto = input<Crypto>({
    icon:'',
    name:'',
    code:'',
    color:''
  });
  type = input<'vertical' | 'horizontal'>();
  graph = input<GraphBadge>({
    type: 'down',
    percent: 0,
    value: 0
  })
  
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "series1",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
      ],
      chart: {
        width: '100%',
        height: '150px',
        type: "area",
        toolbar: {
          show: false
        },
        parentHeightOffset: 0,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      yaxis: {
        labels: {
          show: false,
        }
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false
      },
      grid: {
        show: false,
        padding: { left: -10, right: -10, top: 0, bottom: 8 },
      },
    };
  }

}
