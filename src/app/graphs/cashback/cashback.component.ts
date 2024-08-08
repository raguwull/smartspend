import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js'
import { SpendingService } from '../../services/spending.service';
Chart.register(...registerables)

@Component({
  selector: 'app-cashback',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.css', '.././graphs.component.css'],
})
export class CashbackComponent implements OnInit{
  // chartdata:spendingdata[]=[]
  doughnutchartdata: any = { monthlyspending: [] };
  labeldata:string[]=[];
  amountdata:number[]=[];

  constructor(private spendingService:SpendingService){}

 ngOnInit(): void {
   this.loadchartdata();
 }

 loadchartdata(){
   // this.spendingService.getMonthlySpending().subscribe(item=>{
   //   this.doughnutchartdata=item;
   //   if(this.doughnutchartdata!=null){
   //     this.doughnutchartdata.map(o=>{
   //       this.labeldata.push(o.source);
   //       this.amountdata.push(o.amount);
   //     })
   //     this.Renderpiechart(this.labeldata,this.amountdata,'doughnutchart','doughnut');
   //   }
   // });

   this.spendingService.getWeeklySpending().subscribe(data => {
     this.doughnutchartdata = data.monthlyincome // Access the spending array
     if (this.doughnutchartdata) {
       this.labeldata = this.doughnutchartdata.map((o: any) => o.source);
       this.amountdata = this.doughnutchartdata.map((o: any) => o.amount);

       this.Renderdoughnutchart(this.labeldata, this.amountdata,'doughnutchart','doughnut');
     }
   });

 }
 
 Renderdoughnutchart(labeldata:any,amountdata:any,chartid:string,charttype:any){ 

   try {
     const mychar=new Chart(chartid,{
       type:charttype,
       data:{
         labels:labeldata,
         datasets:[{
           label:'Monthly Income',
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
