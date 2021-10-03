import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { MethThreeDataService } from 'src/app/services/meth-three-data.service';
import { fromEvent, Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-meth-three-step2',
  templateUrl: './meth-three-step2.component.html',
  styleUrls: ['./meth-three-step2.component.css']
})
export class MethThreeStep2Component implements OnInit {

  isChoosen: boolean = false
  pixelArrObj
  defaultPixelArr
  codePosition
  codeImage: any
  @ViewChild('m3s2c1', {static: true}) canvas: ElementRef
  @Input('choosenCodeImage') choosenCodeImage
  @Input('choosenLayerURI') choosenLayerURI
  @Output() onGetResult: EventEmitter<any> = new EventEmitter()
  @Output() onParamsChoosen: EventEmitter<any> = new EventEmitter()
  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  constructor(private methThreeDataService: MethThreeDataService) { }

  ngOnInit() {
    const reader = new FileReader()
    reader.readAsDataURL(this.choosenCodeImage)
    reader.onload = (e) => {
      this.codeImage = new Image();
      this.codeImage.src = reader.result as string;
    }
  }

  ngAfterViewInit() {
    const imageFile = new Image()
    imageFile.src = this.choosenLayerURI
    this.canvas.nativeElement.width = imageFile.width
    this.canvas.nativeElement.height = imageFile.height
    let ctx = this.canvas.nativeElement.getContext('2d')
    ctx.drawImage(imageFile, 0, 0)
    this.pixelArrObj = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    this.defaultPixelArr = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    let mouswMove$: Observable<MouseEvent> = fromEvent(this.canvas.nativeElement, 'mousemove')
    let mouseout$: Observable<MouseEvent> = fromEvent(this.canvas.nativeElement, 'mouseout')
    mouswMove$
    .pipe(
      map(e => ({x: e.offsetX, y: e.offsetY}))
    ).subscribe((p) => {
      this.showCode(p, ctx)
    })
  }

  showCode(position, context) {
    if (!this.codeImage) return
    context.putImageData(this.pixelArrObj, 0, 0)
    context.strokeStyle = 'gold';
    context.lineWidth = 10;
    context.strokeRect(position.x, position.y, this.codeImage.width, this.codeImage.height)
  }

  renderCode(e) {
    this.codePosition = {x: e.offsetX, y: e.offsetY}
    let ctx = this.canvas.nativeElement.getContext('2d')
    ctx.putImageData(this.defaultPixelArr, 0, 0)
    ctx.drawImage(this.codeImage, e.offsetX, e.offsetY)
    this.pixelArrObj = ctx.getImageData(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    this.onParamsChoosen.emit(this.codePosition)
    this.isChoosen = true
  }

  generateNewImage(newChannel, channel) {
    let newPixel
    for (let i = 0; i < newChannel.length; i++) {
      switch(channel) {
        case 'r':
          newPixel = {r: newChannel[i], g: this.methThreeDataService.arrChannelG[i], b: this.methThreeDataService.arrChannelB[i], a: this.methThreeDataService.arrChannelA[i]}
        break
        case 'g':
          newPixel = {r: this.methThreeDataService.arrChannelR[i], g: newChannel[i], b: this.methThreeDataService.arrChannelB[i], a: this.methThreeDataService.arrChannelA[i]}
        break
        case 'b':
          newPixel = {r: this.methThreeDataService.arrChannelR[i], g: this.methThreeDataService.arrChannelG[i], b: newChannel[i], a: this.methThreeDataService.arrChannelA[i]}
        break
      }
      this.methThreeDataService.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }

  lastStep() {
    this.onLast.emit(null)
  }

  nextStep() {
    this.onGetResult.emit()
    this.onNext.emit(null)
  }
}
