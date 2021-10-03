import { Component, Input, OnInit } from '@angular/core';
import { MethodsFacade } from '../facades/methods.facade';

@Component({
  selector: 'app-meth-four-page',
  templateUrl: './meth-four-page.component.html',
  styleUrls: ['./meth-four-page.component.css']
})
export class MethFourPageComponent implements OnInit {

  method = 'Изъятие 20-30 уровней в диапазоне'
  step: number = 1
  _result: any = null

  choosenImage: File | null = null

  constructor(private methodsFacade: MethodsFacade) {
  }

  ngOnInit() {
  }

  lastStep() {
    this.step--;
  }
  nextStep() {
    this.step++;
  }

  setChoosenImage(image: File) {
    this.choosenImage = image
  }

  getResult(paramsForResult: any) {
    if (!this.choosenImage) {
      return
    }
    console.error(this.choosenImage, paramsForResult)
    this.methodsFacade.getI2030Result(this.choosenImage, paramsForResult)
      .subscribe(result => this._result = result)
  }
}
