import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { RgbCmykService } from 'src/app/services/rgb-smyk.service';
import { MethFiveDataService } from 'src/app/services/meth-five-data.service';

@Component({
  selector: 'app-meth-five-step1',
  templateUrl: './meth-five-step1.component.html',
  styleUrls: ['./meth-five-step1.component.css']
})
export class MethFiveStep1Component {

  @Output() onNext: EventEmitter<any> = new EventEmitter()
  @Output() onImageChoosen: EventEmitter<File> = new EventEmitter()

  isChoosen: boolean = false
  isLoading: boolean = false
  isImageLoaded: boolean = false
  reader = new FileReader()
  imgUrl = ''
  choosenChannel = null

  constructor() { }

  addPic(files) {
    this.isImageLoaded = false
    this.isLoading = true
    this.isChoosen = false
    this.choosenChannel = null
    this.onImageChoosen.emit(files[0])
    console.error(files[0])
    this.reader.readAsDataURL(files[0])
    this.reader.onload = (event) => {
      this.imgUrl = this.reader.result as string
    }
  }

  nextStep() {
    this.onNext.emit(null)
  }
}
