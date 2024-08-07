import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js'
import { SpendingService } from '../../services/spending.service';
Chart.register(...registerables)

@Component({
  selector: 'app-trend',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css', '.././graphs.component.css'],
})
export class TrendComponent implements OnInit{
  // chartdata:spendingdata[]=[]
  linechartdata: any = { spendingtrend: [] };
  labeldata:string[]=[];
  cur_month_amountdata:number[]=[];
  prev_month_amountdata:number[]=[];

  constructor(private spendingService:SpendingService){}

  ngOnInit(): void {
    this.loadchartdata();
  }

  loadchartdata(){
    // this.spendingService.getWeeklySpending().subscribe(item=>{
    //   this.linechartdata=item;
    //   if(this.linechartdata!=null){
    //     this.linechartdata.map(o=>{
    //       this.labeldata.push(o.day);
    //       this.amountdata.push(o.amount);
    //     })
    //     this.Renderbarchart(this.labeldata,this.amountdata,'barchart','bar');
    //   }
    // });

    this.spendingService.getWeeklySpending().subscribe(data => {
      this.linechartdata = data.spendingtrend; // Access the spending array
      if (this.linechartdata) {
        this.labeldata = this.linechartdata.map((o: any) => o.week);
        this.cur_month_amountdata = this.linechartdata.map((o: any) => o.current_month_amount);
        this.prev_month_amountdata=this.linechartdata.map((o:any) => o.previous_month_amount);

        this.Renderlinechart(this.labeldata, this.cur_month_amountdata,this.prev_month_amountdata,'linechart','line');
      }
    });

  }
  
  Renderlinechart(labeldata:any,cur_month_amountdata:any,prev_month_amountdata:any,chartid:string,charttype:any){ 

    try {
      const mychar = new Chart(chartid, {
        type: charttype,
        data: {
          labels: labeldata,
          datasets: [
            {
              label: 'Current Month Spending',
              data: cur_month_amountdata,
              borderColor: '#fd4438',
              backgroundColor: 'rgba(253, 68, 56, 0.2)',
              yAxisID: 'y1'
            },
            {
              label: 'Previous Month Spending',
              data: prev_month_amountdata,
              borderColor: '#4807ea',
              backgroundColor: 'rgba(72, 7, 234, 0.2)',
              yAxisID: 'y2'
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'category',
              position: 'bottom'
            },
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y1',
              title: {
                display: true,
                // text: 'Current Month Amount'
              }
            },
            y2: {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y2',
              title: {
                display: true,
                // text: 'Previous Month Amount'
              },
              grid: {
                drawOnChartArea: false
              }
            }
          },
          plugins: {
            legend: {
              display: true // This will show the legend
            }
          }
        }
      });
      console.log(mychar);
    } catch (error) {
      console.error(`Can't do the operations`)
    }
  }
}
