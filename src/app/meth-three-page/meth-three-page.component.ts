import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MethodsFacade } from '../facades/methods.facade';

@Component({
  selector: 'app-meth-three-page',
  templateUrl: './meth-three-page.component.html',
  styleUrls: ['./meth-three-page.component.css']
})
export class MethThreePageComponent implements OnInit {
  
  method = 'Введение 2D штрихового кода (QR) в цифровое изображение'
  step: number = 1

  choosenImage = null
  choosenCodeImage = null
  choosenChannel = null
  choosenCodePosition = null
  choosenChannelURI

  result: any

  resSub$: Subscription

  constructor(private methodsFacade: MethodsFacade) { }

  ngOnInit() {
  }

  setChoosenChannel(channel) {
    this.choosenChannel = channel.choosenChannel
    this.choosenChannelURI = channel.choosenChannelURI
  }

  setChoosenImage(image: File) {
    this.choosenImage = image
  }

  setChoosenCodeImage(codeImage: File) {
    this.choosenCodeImage = codeImage
  }

  setChoosenParams(codePosition) {
    this.choosenCodePosition = codePosition
  }

  getResult() {
    if (!this.choosenImage) {
      return
    }
    const params = {
      channel: this.choosenChannel,
      codePosition: this.choosenCodePosition
    }
    this.resSub$ = this.methodsFacade.getQRResult(this.choosenImage, this.choosenCodeImage, params)
      .subscribe(result => this.result = result)
  }

  lastStep() {
    this.step--;
  }
  nextStep() {
    this.step++;
  }
}
