import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethFourDataService {
  picParams

  choosenChannel: string
  arrChannelC = []
  arrChannelM = []
  arrChannelY = []
  arrChannelK = []

  amountChannelC = []
  amountChannelM = []
  amountChannelY = []
  amountChannelK = []
  newChoosenChannel = []
  newImageArray = []

  constructor() { }

  fullZeroing() {
    this.picParams

    this.choosenChannel
    this.arrChannelC = []
    this.arrChannelM = []
    this.arrChannelY = []
    this.arrChannelK = []

    this.amountChannelC = []
    this.amountChannelM = []
    this.amountChannelY = []
    this.amountChannelK = []
    this.newChoosenChannel = []
    this.newImageArray = []
  }
}
