import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { MethodsFacade } from 'src/app/facades/methods.facade';
import { MethThreeDataService } from 'src/app/services/meth-three-data.service';

@Component({
  selector: 'app-meth-three-step1',
  templateUrl: './meth-three-step1.component.html',
  styleUrls: ['./meth-three-step1.component.css']
})
export class MethThreeStep1Component implements OnInit {

  @Output() onImageChoosen: EventEmitter<File> = new EventEmitter()
  @Output() onCodeImageChoosen: EventEmitter<File> = new EventEmitter()
  @Output() onChannelChoosen: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()

  isChoosen: boolean = false
  isLoading: boolean = false
  isImageLoaded: boolean = false
  codeImageLoaded: boolean = false
  reader = new FileReader()
  imgDivHeight = 300
  imgDivWidth = 0
  imgUrl: string | null = null
  imgCodeUrl: string | null = null
  choosenChannel = ''

  colorLayers: any = null
 
  constructor(private methodsFacade: MethodsFacade) { }

  ngOnInit() {
  }

  addPic(files) {
    this.isImageLoaded = false
    this.isLoading = true
    this.isChoosen = false
    this.choosenChannel = null
    this.onImageChoosen.emit(files[0])
    console.error(files[0])
    this.methodsFacade.getColorLayersRGB(files[0])
      .subscribe((colorLayers: any) => {
        this.isImageLoaded = true
        this.isLoading = false
        this.colorLayers = colorLayers
      })
    this.reader.readAsDataURL(files[0])
    this.reader.onload = (event) => {
      this.imgUrl = this.reader.result as string
    }
  }

  addCode(files) {
    this.codeImageLoaded = true
    this.choosenChannel = null
    this.onCodeImageChoosen.emit(files[0])
    this.reader.readAsDataURL(files[0])
    this.reader.onload = (event) => {
      this.imgCodeUrl = this.reader.result as string
    }
  }

  chooseChannel(channel: string) {
    this.isChoosen = true
    this.choosenChannel = channel
    this.colorLayers
    const channelSelectedMap = {
      'r': this.colorLayers.colorLayerURIR,
      'g': this.colorLayers.colorLayerURIG,
      'b': this.colorLayers.colorLayerURIB,
  }
    const choosenChannelURI = channelSelectedMap[channel]
    this.onChannelChoosen.emit({choosenChannel: channel, choosenChannelURI: choosenChannelURI})
  }

  nextStep() {
    this.onNext.emit(null)
  }
}
