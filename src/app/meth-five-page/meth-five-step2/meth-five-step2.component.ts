import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { RgbCmykService } from 'src/app/services/rgb-smyk.service';
import { MethFiveDataService } from 'src/app/services/meth-five-data.service';

@Component({
  selector: 'app-meth-five-step2',
  templateUrl: './meth-five-step2.component.html',
  styleUrls: ['./meth-five-step2.component.css']
})
export class MethFiveStep2Component implements OnInit {

  @ViewChild('m5s2c1', {static: true}) canvas: ElementRef
  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  blurRadius = 3
  trasholdL = 5
  trasholdU = 99

  isLoading: boolean = false
  imgDivHeight = 600
  imgDivWidth = 0
  imgUrl = ''

  constructor(
    private methFiveDataService: MethFiveDataService,
  ) { }

  ngOnInit() {
    this.isLoading = false
    this.canvas.nativeElement.width = this.methFiveDataService.picParams.width
    this.canvas.nativeElement.height = this.methFiveDataService.picParams.height
    let ctx = this.canvas.nativeElement.getContext('2d')
    this.methFiveDataService.findEdges(this.blurRadius, this.trasholdL, this.trasholdU)
    this.renderImage(ctx)
    this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg')
    this.imgDivWidth = this.methFiveDataService.picParams.width * (this.imgDivHeight / this.methFiveDataService.picParams.height)
  }

  renderImage(ctx) {
    const imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = this.methFiveDataService.newImageArray[i + 0]
      imageData.data[i + 1] = this.methFiveDataService.newImageArray[i + 1]
      imageData.data[i + 2] = this.methFiveDataService.newImageArray[i + 2]
      imageData.data[i + 3] = this.methFiveDataService.newImageArray[i + 3]
    }
    ctx.putImageData(imageData, 0, 0)
  }

  changeValues() {
    console.log(this.isLoading)
    let ctx = this.canvas.nativeElement.getContext('2d')
    this.isLoading = true
    this.methFiveDataService.findEdges(this.blurRadius, this.trasholdL, this.trasholdU)
    this.renderImage(ctx)
    this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg')
    this.isLoading = false
  }

  lastStep() {
    this.onLast.emit(null)
  }

  nextStep() {
    this.methFiveDataService.generateFLUImage()
    this.onNext.emit(null)
  }
}
