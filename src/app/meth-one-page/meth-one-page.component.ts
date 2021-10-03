import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MethodsFacade } from '../facades/methods.facade';

@Component({
  selector: 'app-meth-one-page',
  templateUrl: './meth-one-page.component.html',
  styleUrls: ['./meth-one-page.component.css']
})
export class MethOnePageComponent implements OnInit {

  method = 'Изъятие нескольких уровней в диапазоне канала'
  step: number = 1
  _choosenChannel: null | string = null 
  _choosenImage: null | File = null
  _result: any

  resSub$: Subscription

  constructor(
    private methodsFacade: MethodsFacade
  ) {}

  ngOnInit() {
  }

  setChoosenChannel(choosenChannel) {
    this._choosenChannel = choosenChannel
  }

  setChoosenImage(choosenImage) {
    this._choosenImage = choosenImage
  }

  getResult(levelsAmount: number) {
    if (!this._choosenImage) {
      return
    }
    console.error(this._choosenImage, levelsAmount)
    const params = {
      channel: this._choosenChannel,
      levels: levelsAmount
    }
    this.resSub$ = this.methodsFacade.getIRGBResult(this._choosenImage, params)
      .subscribe(result => this._result = result)
  }

  lastStep() {
    this.step--;
  }

  nextStep() {
    this.step++;
  }

  ngOnDestroy() {
    this.resSub$.unsubscribe()
  }

}
