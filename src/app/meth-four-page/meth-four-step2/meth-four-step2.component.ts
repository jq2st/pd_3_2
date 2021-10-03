import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RgbCmykService } from 'src/app/services/rgb-smyk.service';
import { MethFourDataService } from 'src/app/services/meth-four-data.service';
import { MethodsFacade } from 'src/app/facades/methods.facade';

@Component({
  selector: 'app-meth-four-step2',
  templateUrl: './meth-four-step2.component.html',
  styleUrls: ['./meth-four-step2.component.css']
})
export class MethFourStep2Component implements OnInit {

  @Output() onLast: EventEmitter<any> = new EventEmitter()
  @Output() onNext: EventEmitter<any> = new EventEmitter()
  @Output() onResult: EventEmitter<any> = new EventEmitter()

  codeNum: string = '20'

  constructor(
    private rgbCmykService: RgbCmykService,
    private methFourDataService: MethFourDataService,
    private methodsFacade: MethodsFacade
  ) { }

  ngOnInit() {
  }

  lastStep() {
    this.onLast.emit(null)
  }
  
  nextStep() {
    this.onResult.emit({
      params: {
        codeNum: this.codeNum
      }
    })
    this.onNext.emit(null)
  }
}
