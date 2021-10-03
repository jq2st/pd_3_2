import { Component, EventEmitter, Output } from '@angular/core';
import { MethOneDataService } from 'src/app/services/meth-one-data.service';

@Component({
  selector: 'app-meth-one-step2',
  templateUrl: './meth-one-step2.component.html',
  styleUrls: ['./meth-one-step2.component.css']
})
export class MethOneStep2Component {

  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()
  @Output() onParamsChoosen: EventEmitter<number> = new EventEmitter()

  _levelsToEdit: string = '1'

  constructor() { }

  lastStep() {
    this.onLast.emit(null)
  }

  nextStep() {
    this.onParamsChoosen.emit(+this._levelsToEdit)
    this.onNext.emit(null)
  }
}
