import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { MethOneDataService } from 'src/app/services/meth-one-data.service';
import { ChartsService } from 'src/app/services/charts.service';
import { MethodsFacade } from 'src/app/facades/methods.facade';

@Component({
  selector: 'app-meth-one-step1',
  templateUrl: './meth-one-step1.component.html',
  styleUrls: ['./meth-one-step1.component.css']
})

export class MethOneStep1Component {

  @Output() onNext: EventEmitter<any> = new EventEmitter()
  @Output() onImageChoosen: EventEmitter<File> = new EventEmitter()
  @Output() onChannelChoosen: EventEmitter<string> = new EventEmitter()

  isChoosen: boolean = false
  isLoading: boolean = false
  isImageLoaded: boolean = false
  reader = new FileReader()
  imgUrl = ''
  choosenChannel = null

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar'
  barChartLegend = true
  barChartPlugins = []

  barChartLabels1: Label[] = []
  barChartColor1: Color[] = [{borderColor: 'black', backgroundColor: 'red'}]
  barChartData1: ChartDataSets[] = [{data: [], label: 'R Channel'}]

  barChartLabels2: Label[] = []
  barChartColor2: Color[] = [{borderColor: 'black', backgroundColor: 'green'}]
  barChartData2: ChartDataSets[] = [{ data: [], label: 'G Channel' }]

  barChartLabels3: Label[] = []
  barChartColor3: Color[] = [{borderColor: 'black', backgroundColor: 'blue'}]
  barChartData3: ChartDataSets[] = [{ data: [], label: 'B Channel'}]

  constructor(private methodsFacade: MethodsFacade) { }

  addPic(files) {
    this.isImageLoaded = false
    this.isLoading = true
    this.isChoosen = false
    this.choosenChannel = null
    this.onImageChoosen.emit(files[0])
    console.error(files[0])
    this.methodsFacade.getChartsValuesRGB(files[0])
      .subscribe((chartsValues: any) => {
        this.isImageLoaded = true
        this.isLoading = false
        this.renderCharts(chartsValues.chartR, chartsValues.chartG, chartsValues.chartB)
      })
    this.reader.readAsDataURL(files[0])
    this.reader.onload = (event) => {
      this.imgUrl = this.reader.result as string
    }
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

  chooseChannel(channel: string) {
    this.isChoosen = true
    this.onChannelChoosen.emit(channel)
    this.choosenChannel = channel
  }

  nextStep() {
    this.onNext.emit(null)
  }
}
