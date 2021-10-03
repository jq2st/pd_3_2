import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { RgbCmykService } from '../services/rgb-smyk.service';

@Component({
  selector: 'app-checkimg-page',
  templateUrl: './checkimg-page.component.html',
  styleUrls: ['./checkimg-page.component.css']
})
export class CheckimgPageComponent implements OnInit {

  @ViewChild('m1s1c1', {static: false}) canvas: ElementRef
  @Output() onResult: EventEmitter<any> = new EventEmitter()

  isChoosen: boolean = false
  isLoading: boolean = false
  isImageLoaded: boolean = false
  reader = new FileReader()
  pic = new Image()
  imgFile: File
  imgDivHeight = 300
  imgDivWidth = 0
  imgUrl = ''

  isResult = false
  result

  constructor(
    private rgbCmykService: RgbCmykService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  addPic(files) {
    this.isImageLoaded = false
    this.isLoading = true
    this.isChoosen = false
	  this.reader.onload = () => {
      let ctx = this.canvas.nativeElement.getContext('2d')
      this.pic.onload = () => {
        this.canvas.nativeElement.width = this.pic.width
        this.canvas.nativeElement.height = this.pic.height
        ctx.drawImage(this.pic, 0, 0)
        this.imgUrl = this.canvas.nativeElement.toDataURL('image/jpeg')
        this.imgDivWidth = this.pic.width * (this.imgDivHeight / this.pic.height)
        this.devideOnChannels(ctx)
        this.renderImage(ctx)
        this.isImageLoaded = true
        this.isLoading = false
      }
      this.pic.src = this.reader.result as string
    }
    this.reader.readAsDataURL(files[0])
    this.imgFile = files[0]
  }

  devideOnChannels(ctx) {
    let pixelData = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    for (let i = 0; i < pixelData.data.length; i += 4) {
      let new_cmyk = this.rgbCmykService.rgb2cmyk(pixelData.data[i], pixelData.data[i + 1], pixelData.data[i + 2])
    }
  }

  renderImage(ctx) {
    const imageData = ctx.createImageData(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
    }
    ctx.putImageData(imageData, 0, 0)
  }

  checkImg() {
    const size = this.pic.width + 'x' + this.pic.height
    this.api.checkImg(this.imgFile, size)
      .subscribe(res => {
        this.isResult = true
        this.result = {result: false, info: 'none'}
      })
  }

}
