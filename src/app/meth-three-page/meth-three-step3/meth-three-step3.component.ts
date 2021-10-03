import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MethThreeDataService } from 'src/app/services/meth-three-data.service';

@Component({
  selector: 'app-meth-three-step3',
  templateUrl: './meth-three-step3.component.html',
  styleUrls: ['./meth-three-step3.component.css']
})
export class MethThreeStep3Component implements OnInit {
  
  @Input('methodResult') methodResult 
  @Output() onLast: EventEmitter<any> = new EventEmitter()

  imgUrl

  constructor(private api: ApiService, private methThreeDataService: MethThreeDataService) { }

  ngOnInit() {
  }
  
  lastStep() {
    this.onLast.emit(null)
  }

  saveImage() {
    const link = document.createElement('a')
    link.download = 'filename.png'
    link.href = this.methodResult.imageURI
    link.click()
  }
}
