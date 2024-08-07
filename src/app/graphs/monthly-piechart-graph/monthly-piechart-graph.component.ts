import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SpendingService } from '../../services/spending.service';
Chart.register(...registerables);

@Component({
  selector: 'app-monthly-piechart-graph',
  standalone: true,
  imports: [],
  templateUrl: './monthly-piechart-graph.component.html',
  styleUrl: './monthly-piechart-graph.component.css',
})
export class MonthlyPiechartGraphComponent implements OnInit {
  @Input() displayLegends: boolean = true;
  // chartdata:spendingdata[]=[]
  piechartdata: any = { monthlyspending: [] };
  labeldata: string[] = [];
  amountdata: number[] = [];

  constructor(private spendingService: SpendingService) {}

  ngOnInit(): void {
    this.loadchartdata();
  }

  loadchartdata() {
    // this.spendingService.getMonthlySpending().subscribe(item=>{
    //   this.piechartdata=item;
    //   if(this.piechartdata!=null){
    //     this.piechartdata.map(o=>{
    //       this.labeldata.push(o.category);
    //       this.amountdata.push(o.amount);
    //     })
    //     this.Renderpiechart(this.labeldata,this.amountdata,'piechart','pie');
    //   }
    // });

    this.spendingService.getWeeklySpending().subscribe((data) => {
      this.piechartdata = data.monthlyspending; // Access the spending array
      if (this.piechartdata) {
        this.labeldata = this.piechartdata.map((o: any) => o.category);
        this.amountdata = this.piechartdata.map((o: any) => o.amount);

        this.Renderpiechart(this.labeldata, this.amountdata, 'piechart', 'pie');
      }
    });
  }

  Renderpiechart(
    labeldata: any,
    amountdata: any,
    chartid: string,
    charttype: any
  ) {
    try {
      const mychar = new Chart(chartid, {
        type: charttype,
        data: {
          labels: labeldata,
          datasets: [
            {
              label: 'Monthly Expenses',
              data: amountdata,
              backgroundColor: [
                '#fd4438',
                '#4807ea',
                '#f2c94c',
                '#219653',
                '#ef5da8',
                '#9b51e0',
                '#f2994a',
              ],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
            },
          },
        }
      });
      console.log(mychar);
    } catch (error) {
      console.error(`Can't do the operations`);
    }
  }
}
