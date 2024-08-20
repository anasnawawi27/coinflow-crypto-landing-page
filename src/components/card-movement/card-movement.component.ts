import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule,
  ApexYAxis,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  tooltip: ApexTooltip
};

@Component({
  selector: 'app-card-movement',
  templateUrl: './card-movement.component.html',
  styleUrl: './card-movement.component.scss',
  standalone: true,
  imports: [CommonModule, NgIconComponent, NgApexchartsModule],
})
export class CardMovementComponent {
  public chartOptions!: ChartOptions;

  active = signal('1D');
  data = [100, 140, 85, 90, 150, 95, 100, 130, 91]

  constructor() {
    this.updateData(this.data)
  }

  onChangeChart(param:string){
    this.active.set(param);
    
    switch(this.active()){
      case '1D':
        this.updateData(this.data)
        break
      case '1W':
        this.updateData([...this.data, ...this.data.reverse()])
        break
        case '1M':
          this.updateData([...this.data, ...this.data, ...this.data])
          break
        case '3M':
          this.updateData([...this.data, ...this.data, ...this.data, ...this.data])
          break
        case 'YTD':
          this.updateData([...this.data, ...this.data, ...this.data, ...this.data, ...this.data])
          break
        case '1Y':
          this.updateData([...this.data, ...this.data, ...this.data, ...this.data, ...this.data, ...this.data])
          break
        case 'All':
          this.updateData([...this.data, ...this.data, ...this.data, ...this.data, ...this.data, ...this.data, ...this.data])
          break
    }
  }

  updateData(data: Array<number>){
    this.chartOptions = {
      series: [
        {
          name: "Crypto",
          data
        }
      ],
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        width: 3,
        colors: ['#2ea8a2'],
      },
      grid: {
        show: false,
        padding: { left: -10, right: -10, top: 0, bottom: 0 },
      },
      yaxis: {
        labels: {
          show: false,
        }
      },
      xaxis: {
        tooltip: {
          enabled: false
        }
      },
      tooltip: {
        custom: function (d: any) {
          const i = d.dataPointIndex;
          const series = d.series[d.seriesIndex]
          console.log(d)
          return `<div class="p-2 bg-slate-100">$ ${series[i]}</div>`
        }
      }
    };
  }
}
