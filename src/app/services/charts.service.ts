import { Injectable } from '@angular/core';
import { MethOneDataService } from './meth-one-data.service';
import { MethTwoDataService } from './meth-two-data.service';
import { MethFourDataService } from './meth-four-data.service';
import { RgbCmykService } from './rgb-smyk.service';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(
    private rgbCmykService: RgbCmykService,
    private oneData: MethOneDataService,
    private twoData: MethTwoDataService,
    private fourData: MethFourDataService
  ) { }

  renderChartsRGB(meth, pData) {
    let method
    switch(meth) {
      case 1: 
        method = this.oneData
      break
      case 2: 
        method = this.twoData
      break
    }
    method.amountChannelR = []
    method.amountChannelG = []
    method.amountChannelB = []
    for (var i = 0; i < pData.length; i += 4) {
      method.arrChannelR.push(pData[i + 0])
      method.arrChannelG.push(pData[i + 1])
      method.arrChannelB.push(pData[i + 2])
      method.arrChannelA.push(pData[i + 3])
    }
    for (let i = 0; i <= 255; i++) {
      if (method.arrChannelR.includes(i)) {
        method.arrChannelR.forEach(n => {
          if (n == i) {
            method.amountChannelR[i] = (method.amountChannelR[i] || 0) + 1;
          }
        })
      }
      else {
        method.amountChannelR[i] = 0;
      }

      if (method.arrChannelG.includes(i)) {
        method.arrChannelG.forEach(n => {
          if (n == i) {
            method.amountChannelG[i] = (method.amountChannelG[i] || 0) + 1;
          }
        })
      }
      else {
        method.amountChannelG[i] = 0;
      }

      if (method.arrChannelB.includes(i)) {
        method.arrChannelB.forEach(n => {
          if (n == i) {
            method.amountChannelB[i] = (method.amountChannelB[i] || 0) + 1;
          }
        })
      }
      else {
        method.amountChannelB[i] = 0;
      }
    }
  }

  renderChartsCMYK(meth, pData) {
    let method
    switch(meth) {
      case 4: 
        method = this.fourData
      break
    }
    method.amountChannelC = []
    method.amountChannelM = []
    method.amountChannelY = []
    method.amountChannelK = []
    for (var i = 0; i < pData.length; i += 4) {
      let new_cmyk = this.rgbCmykService.rgb2cmyk(pData[i], pData[i + 1], pData[i + 2])
      method.arrChannelC.push(Math.floor(new_cmyk.c))
      method.arrChannelM.push(Math.floor(new_cmyk.m))
      method.arrChannelY.push(Math.floor(new_cmyk.y))
      method.arrChannelK.push(Math.floor(new_cmyk.k))
    }
    for (let i = 0; i <= 100; i++) {
      if (method.arrChannelC.includes(i)) {
        method.arrChannelC.forEach(n => {
          if (n == i) {
            method.amountChannelC[i] = (method.amountChannelC[i] || 0) + 1;
          }
        })
      }
      else {
        method.amountChannelC[i] = 0;
      }

      if (method.arrChannelM.includes(i)) {
        method.arrChannelM.forEach(n => {
          if (n == i) {
            method.amountChannelM[i] = (method.amountChannelM[i] || 0) + 1;
          }
        })
      }
      else {
        method.amountChannelM[i] = 0;
      }

      if (method.arrChannelY.includes(i)) {
        method.arrChannelY.forEach(n => {
          if (n == i) {
            method.amountChannelY[i] = (method.amountChannelY[i] || 0) + 1;
          }
        })
      }
      else {
        method.amountChannelY[i] = 0;
      }

      if (method.arrChannelK.includes(i)) {
        method.arrChannelK.forEach(n => {
          if (n == i) {
            method.amountChannelK[i] = (method.amountChannelK[i] || 0) + 1;
          }
        })
      }
      else {
        method.amountChannelK[i] = 0;
      }
    }
  }
}
