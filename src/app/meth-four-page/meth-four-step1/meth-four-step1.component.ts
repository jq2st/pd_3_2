import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MethFourDataService } from 'src/app/services/meth-four-data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { RgbCmykService } from 'src/app/services/rgb-smyk.service';
import { ChartsService } from 'src/app/services/charts.service';
import { MethodsFacade } from 'src/app/facades/methods.facade';

@Component({
  selector: 'app-meth-four-step1',
  templateUrl: './meth-four-step1.component.html',
  styleUrls: ['./meth-four-step1.component.css']
})
export class MethFourStep1Component implements OnInit {

  @Output() onNext: EventEmitter<any> = new EventEmitter()
  @Output() onImageChoosen: EventEmitter<File> = new EventEmitter()

  isChoosen: boolean = false
  isLoading: boolean = false
  isImageLoaded: boolean = false
  reader = new FileReader()
  imgUrl: any

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

  constructor(
    private methodsFacade: MethodsFacade
  ) { }

  ngOnInit() {
  }

  addPic(files) {
    this.isImageLoaded = false
    this.isLoading = true
    this.isChoosen = false
    this.onImageChoosen.emit(files[0])
    console.error(files[0])
    this.methodsFacade.getChartsValuesCMYK(files[0])
      .subscribe((chartsValues: any) => {
        this.isImageLoaded = true
        this.isLoading = false
        this.renderCharts(chartsValues.chartC, chartsValues.chartM, chartsValues.chartY, chartsValues.chartK)
      })
    this.reader.readAsDataURL(files[0])
    this.reader.onload = (event) => {
      this.imgUrl = this.reader.result as string
    }
  }

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

  nextStep() {
    this.onNext.emit(null)
  }
  
}
