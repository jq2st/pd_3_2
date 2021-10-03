import { Injectable } from '@angular/core';

export interface PicParams {
  width: number,
  height: number
}

@Injectable({
  providedIn: 'root'
})
export class MethOneDataService {

  picParams: PicParams

  choosenChannel: string
  arrChannelR = []
  arrChannelG = []
  arrChannelB = []
  arrChannelA = []

  amountChannelR = []
  amountChannelG = []
  amountChannelB = []
  amountChannelA = []

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
    this.amountChannelA = []
    
    this.newChoosenChannel = []
    this.newImageArray = []
  }
}

