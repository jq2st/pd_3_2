import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { MethFourDataService } from 'src/app/services/meth-four-data.service';
import { ChartsService } from 'src/app/services/charts.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meth-four-step3',
  templateUrl: './meth-four-step3.component.html',
  styleUrls: ['./meth-four-step3.component.css']
})
export class MethFourStep3Component implements OnInit {

  @Input('methodResult') 
  get methodResult() {return this._methodResult}
  set methodResult(methodResult: any) {
    this._methodResult = methodResult
    console.error(methodResult.charts.chartC)
    this.renderCharts(methodResult.charts.chartC, methodResult.charts.chartM, methodResult.charts.chartY, methodResult.charts.chartK)
  }

  @Output() onLast: EventEmitter<any> = new EventEmitter()

  _methodResult 
  _imgUrl

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar'
  barChartLegend = true
  barChartPlugins = []

  barChartLabels1: Label[] = []
  barChartColor1: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'cyan',
  }]
  barChartData1: ChartDataSets[] = [
    { data: [], label: 'C Channel' }
  ]


  barChartLabels2: Label[] = []
  barChartColor2: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'magenta',
  }]
  barChartData2: ChartDataSets[] = [
    { data: [], label: 'M Channel' }
  ]

  barChartLabels3: Label[] = []
  barChartColor3: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'yellow',
  }]
  barChartData3: ChartDataSets[] = [
    { data: [], label: 'Y Channel' }
  ]

  barChartLabels4: Label[] = []
  barChartColor4: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'black',
  }]
  barChartData4: ChartDataSets[] = [
    { data: [], label: 'K Channel' }
  ]

  constructor() { }

  ngOnInit() {}

  renderCharts(typeC, typeM, typeY, typeK) {
    let chartColumnNames = []
    for (let i = 0; i <= 100; i++) {
      chartColumnNames[i] = i
    }

    this.barChartLabels1 = chartColumnNames
    this.barChartData1 = [
      { data: typeC, label: 'C Channel' }
    ]

    this.barChartLabels2 = chartColumnNames
    this.barChartData2 = [
      { data: typeM, label: 'M Channel' }
    ]

    this.barChartLabels3 = chartColumnNames
    this.barChartData3 = [
      { data: typeY, label: 'Y Channel' }
    ]

    this.barChartLabels4 = chartColumnNames
    this.barChartData4 = [
      { data: typeK, label: 'K Channel' }
    ]
  }
  
  lastStep() {
    this.onLast.emit(null)
  }

  saveImage() {
    const link = document.createElement('a')
    link.download = 'filename.png'
    link.click()
  }
}
