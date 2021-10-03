import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkimg-result',
  templateUrl: './checkimg-result.component.html',
  styleUrls: ['./checkimg-result.component.css']
})
export class CheckimgResultComponent implements OnInit {

  @Input('result') inResult
  @Output() onClose: EventEmitter<any> = new EventEmitter()

  result = {}

  constructor() { }

  ngOnInit() {
    this.result = {result: this.inResult.result ? 'метка присутствует.' : 'метка отсутствует.', info: this.inResult.info == 'none' ? '' : this.inResult.info}
  }

  close() {
    this.onClose.emit(true)
  }

}
