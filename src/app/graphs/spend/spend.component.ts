import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js'
import { SpendingService } from '../../services/spending.service';
Chart.register(...registerables)

@Component({
  selector: 'app-spend',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './spend.component.html',
  styleUrls: ['./spend.component.css', '.././graphs.component.css'],
})
export class SpendComponent implements OnInit{
   // chartdata:spendingdata[]=[]
   piechartdata: any = { monthlyspending: [] };
   labeldata:string[]=[];
   amountdata:number[]=[];

   constructor(private spendingService:SpendingService){}

  ngOnInit(): void {
    this.loadchartdata();
  }

  loadchartdata(){
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

    this.spendingService.getWeeklySpending().subscribe(data => {
      this.piechartdata = data.monthlyspending; // Access the spending array
      if (this.piechartdata) {
        this.labeldata = this.piechartdata.map((o: any) => o.category);
        this.amountdata = this.piechartdata.map((o: any) => o.amount);

        this.Renderpiechart(this.labeldata, this.amountdata,'piechart','pie');
      }
    });

  }
  
  Renderpiechart(labeldata:any,amountdata:any,chartid:string,charttype:any){ 

    try {
      const mychar=new Chart(chartid,{
        type:charttype,
        data:{
          labels:labeldata,
          datasets:[{
            label:'Monthly Expenses',
            data:amountdata,
            backgroundColor: [
              '#fd4438',
              '#4807ea',
              '#f2c94c',
              '#219653',
              '#ef5da8',
              '#9b51e0',
              '#f2994a'
            ],
          }
        ]
        },
        options:{
          plugins: {
            legend: {
              display: true // This hides the legend
            }
          }
        }
      })
      console.log(mychar)
    } catch (error) {
      console.error(`Can't do the operations`)
    }
  }
}
