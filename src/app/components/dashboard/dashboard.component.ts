import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl:'./dashboard.component.css',
})
export class DashboardComponent {

  chart = new Chart({

    title:{
      text:'User Statistics'
    },
    xAxis:{
      categories:[
        'Selangor',
        'Johor',
        'Sabah',
        'Perak',
        'Pahang'
      ]
    },
    yAxis:{
      title:{
        text:"User count"
      }
      
    },
    series:[
      {
        name:"State",
        type:"line",
        data:[20,3,5,20,1]
      }
    ]
  })

  chart2 = new Chart({

    title:{
      text:'Daily Sales'
    },
    xAxis:{
      categories:[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thurdsay',
        'Friday'
      ]
    },
    yAxis:{
      title:{
        text:"Sales"
      }
      
    },
    series:[
      {
        name:"Day",
        type:"line",
        data:[20,3,5,20,1]
      }
    ]
  })

  constructor(){}

  ngOnInit(): void {}
  
}
