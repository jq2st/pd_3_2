import { Injectable } from '@angular/core';

export interface PicParams {
  width: number,
  height: number
}

@Injectable({
  providedIn: 'root'
})

export class MethThreeDataService {
  picParams: PicParams
  codeParams: PicParams
  
  codeData

  choosenChannel: string
  arrChannelR = []
  arrChannelG = []
  arrChannelB = []
  arrChannelA = []

  channelPixArrR = []
  channelPixArrG = []
  channelPixArrB = []
  channelPixArrA = []

  channelDataR = []
  channelDataG = []
  channelDataB = []
  channelDataA = []

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

    this.channelPixArrR = []
    this.channelPixArrG = []
    this.channelPixArrB = []
    this.channelPixArrA = []

    this.channelDataR = []
    this.channelDataG = []
    this.channelDataB = []
    this.channelDataA= []

    this.newChoosenChannel = []
    this.newImageArray = []
  }

  codeZeroing() {
    this.codeParams
    this.codeData = ''
  }
}
