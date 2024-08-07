import { Component, inject, Input, OnInit } from '@angular/core';
import { SpendingService } from '../../services/spending.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-weekly-expense-graph',
  standalone: true,
  imports: [],
  templateUrl: './weekly-expense-graph.component.html',
  styleUrl: './weekly-expense-graph.component.css',
})
export class WeeklyExpenseGraphComponent implements OnInit {
  // chartdata:spendingdata[]=[]
  @Input() displayLegends: boolean = false;
  barchartdata: any = { weeklyspending: [] };
  labeldata: string[] = [];
  amountdata: number[] = [];
  private spendingService = inject(SpendingService);
  ngOnInit(): void {
    this.loadchartdata();
  }

  loadchartdata() {
    // this.spendingService.getWeeklySpending().subscribe(item=>{
    //   this.barchartdata=item;
    //   if(this.barchartdata!=null){
    //     this.barchartdata.map(o=>{
    //       this.labeldata.push(o.day);
    //       this.amountdata.push(o.amount);
    //     })
    //     this.Renderbarchart(this.labeldata,this.amountdata,'barchart','bar');
    //   }
    // });

    this.spendingService.getWeeklySpending().subscribe((data) => {
      this.barchartdata = data.weeklyspending; // Access the spending array
      if (this.barchartdata) {
        this.labeldata = this.barchartdata.map((o: any) => o.day);
        this.amountdata = this.barchartdata.map((o: any) => o.amount);

        this.Renderbarchart(this.labeldata, this.amountdata, 'barchart', 'bar');
      }
    });
  }

  Renderbarchart(
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
              label: 'weekly expenses',
              data: amountdata,
              backgroundColor: [
                '#fd4438',
                '#4807ea',
                '#f2c94c',
                '#219653',
                '#ef5da8',
                '#9b51e0',
                '#452f02',
              ],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: this.displayLegends,
            },
          },
        },
      });
      console.log(mychar);
    } catch (error) {
      console.error(`Can't do the operations`);
    }
  }
}
