import { Injectable } from '@angular/core';

export interface PicParams {
  width: number,
  height: number
}

@Injectable({
  providedIn: 'root'
})
export class MethTwoDataService {

  picParams: PicParams

  choosenChannel: string
  arrChannelR = []
  arrChannelG = []
  arrChannelB = []
  arrChannelA = []

  amountChannelR = []
  amountChannelG = []
  amountChannelB = []
  newChoosenChannel = []
  newImageArray = []

  constructor() { }

  fullZeroing() {
    this.picParams

    this.choosenChannel
    this.arrChannelR = []
    this.arrChannelG = []
    this.arrChannelB = []
    this.arrChannelA = []

    this.amountChannelR = []
    this.amountChannelG = []
    this.amountChannelB = []
    this.newChoosenChannel = []
    this.newImageArray = []
  }
}

