import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { MethOneDataService } from 'src/app/services/meth-one-data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChartsService } from 'src/app/services/charts.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meth-one-step3',
  templateUrl: './meth-one-step3.component.html',
  styleUrls: ['./meth-one-step3.component.css']
})
export class MethOneStep3Component implements OnInit {

  @Input('methodResult') 
  get methodResult() {return this._methodResult}
  set methodResult(methodResult: any) {
    this._methodResult = methodResult
    console.error(methodResult.charts.chartC)
    this.renderCharts(methodResult.charts.chartR, methodResult.charts.chartG, methodResult.charts.chartB)
  }
  @Output() onLast: EventEmitter<any> = new EventEmitter()

  _methodResult

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar'
  barChartLegend = true
  barChartPlugins = []

  barChartLabels1: Label[] = []
  barChartColor1: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'red',
  }]
  barChartData1: ChartDataSets[] = [
    { data: [], label: 'R Channel' }
  ]


  barChartLabels2: Label[] = []
  barChartColor2: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'green',
  }]
  barChartData2: ChartDataSets[] = [
    { data: [], label: 'G Channel' }
  ]

  barChartLabels3: Label[] = []
  barChartColor3: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'blue',
  }]
  barChartData3: ChartDataSets[] = [
    { data: [], label: 'B Channel' }
  ]

  constructor() { }

  ngOnInit() {
  }

  renderCharts(typeR, typeG, typeB) {
    let chartColumnNames = []
    for (let i = 0; i <= 255; i++) {
      chartColumnNames[i] = i
    }

    this.barChartLabels1 = chartColumnNames
    this.barChartData1 = [
      { data: typeR, label: 'R Channel' }
    ]

    this.barChartLabels2 = chartColumnNames
    this.barChartData2 = [
      { data: typeG, label: 'G Channel' }
    ]

    this.barChartLabels3 = chartColumnNames
    this.barChartData3 = [
      { data: typeB, label: 'B Channel' }
    ]
  }
  
  lastStep() {
    this.onLast.emit(null)
  }

  saveImage() {
    const link = document.createElement('a')
    link.download = 'file.png'
    link.href = this._methodResult.imageURI
    link.click()
  }
}
