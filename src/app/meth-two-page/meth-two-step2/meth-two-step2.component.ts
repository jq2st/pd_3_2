import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MethTwoDataService } from 'src/app/services/meth-two-data.service';

@Component({
  selector: 'app-meth-two-step2',
  templateUrl: './meth-two-step2.component.html',
  styleUrls: ['./meth-two-step2.component.css']
})
export class MethTwoStep2Component {

  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()
  @Output() onParamsChoosen: EventEmitter<string> = new EventEmitter()

  codeString: string = ''

  constructor() { }

  lastStep() {
    this.onLast.emit(null)
  }

  nextStep() {
    this.onParamsChoosen.emit(this.codeString)
    this.onNext.emit(null)
  }

}
