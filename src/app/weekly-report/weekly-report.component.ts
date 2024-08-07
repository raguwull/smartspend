import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActionService } from '../shared/icon/action/action.service';
import { ActionMenu } from '../shared/icon/action/action.model';
import { ActionComponent } from '../shared/icon/action/action.component';
import { ActionIconComponent } from "../shared/icon/action-icon/action-icon.component";
import {Chart, registerables} from 'chart.js'
import { SpendingService } from '../services/spending.service';
Chart.register(...registerables)

@Component({
  selector: 'app-weekly-report',
  standalone: true,
  imports: [CurrencyPipe, ActionComponent, ActionIconComponent],
  templateUrl: './weekly-report.component.html',
  styleUrl: './weekly-report.component.css',
})
export class WeeklyReportComponent implements OnInit {
  arr = ['Games', 'Home', 'Gas'];
  actionService = inject(ActionService);
  allActions = this.actionService.getActions();
  usedActions!: ActionMenu[];

  // chartdata:spendingdata[]=[]
  barchartdata: any = { weeklyspending: [] };
  labeldata:string[]=[];
  amountdata:number[]=[];

  constructor(private spendingService:SpendingService){}

  ngOnInit(): void {
    this.loadchartdata();
  }

  loadchartdata(){
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

    this.spendingService.getWeeklySpending().subscribe(data => {
      this.barchartdata = data.weeklyspending; // Access the spending array
      if (this.barchartdata) {
        this.labeldata = this.barchartdata.map((o: any) => o.day);
        this.amountdata = this.barchartdata.map((o: any) => o.amount);

        this.Renderbarchart(this.labeldata, this.amountdata,'barchart','bar');
      }
    });

  }
  
  Renderbarchart(labeldata:any,amountdata:any,chartid:string,charttype:any){ 

    try {
      const mychar=new Chart(chartid,{
        type:charttype,
        data:{
          labels:labeldata,
          datasets:[{
            label:'weekly expenses',
            data:amountdata,
            backgroundColor: [
              '#fd4438',
              '#4807ea',
              '#f2c94c',
              '#219653',
              '#ef5da8',
              '#9b51e0',
              '#452f02'
            ],
          }
        ]
        },
        options:{
          plugins: {
            legend: {
              display: false // This hides the legend
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
