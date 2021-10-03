import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MethodsFacade } from '../facades/methods.facade';

@Component({
  selector: 'app-meth-two-page',
  templateUrl: './meth-two-page.component.html',
  styleUrls: ['./meth-two-page.component.css']
})
export class MethTwoPageComponent implements OnInit {

  method = 'Введение штрихового кода в тоновый диапазон канала RGB'
  step: number = 1
  _choosenChannel: null | string = null 
  _choosenImage: null | File = null
  _result: any

  resSub$: Subscription

  constructor(private methodsFacade: MethodsFacade) { }

  ngOnInit() {
  }

  setChoosenChannel(choosenChannel) {
    console.error(choosenChannel)
    this._choosenChannel = choosenChannel
  }

  setChoosenImage(choosenImage) {
    console.error(choosenImage)
    this._choosenImage = choosenImage
  }

  getResult(code: string) {
    if (!this._choosenImage) {
      return
    }
    console.error(this._choosenImage, code)
    const params = {
      channel: this._choosenChannel,
      code: code
    }
    this.resSub$ = this.methodsFacade.getBCResult(this._choosenImage, params)
      .subscribe(result => this._result = result)
  }

  lastStep() {
    this.step--;
  }
  nextStep() {
    this.step++;
  }
}
