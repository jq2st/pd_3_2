import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { RgbCmykService } from './rgb-smyk.service';

interface Max {
  elm: number,
  index: number,
  gradient: number
}

@Injectable({
  providedIn: 'root'
})
export class MethFiveDataService {
  picParams

  arrChannelC = []
  arrChannelM = []
  arrChannelY = []
  arrChannelK = []

  newArrChannelY = []

  grandientAngles = []
  newImageArray = []

  expsArr = []

  blurChannelArr = []
  gradientsChannelArr = []
  nonmaxChannelArr = []
  trasholdsChannelArr = []

  newFLUchannel = []

  constructor(private rgbCmykService: RgbCmykService, private api: ApiService) { }

  fullZeroing() {
    this.picParams

    this.arrChannelC = []
    this.arrChannelM = []
    this.arrChannelY = []
    this.arrChannelK = []

    this.newImageArray = []
  }

  findEdgesXX(blurRadius, trasholdL, trasholdU) {
    this.api.m5updateEdges(blurRadius, trasholdL, trasholdU)
      .subscribe(res => {
        console.log(res)
      })
  }
  findEdges(blurRadius, trasholdL, trasholdU) {
    this.imageBlur(blurRadius)
    this.findGradients()
    this.nonmaximumRemove()
    this.trasholds(trasholdL, trasholdU)
    this.removeExp()
  }

  findPixel(oY, oX) {
    const c = this.arrChannelC[this.picParams.width * oY + oX]
    const m = this.arrChannelM[this.picParams.width * oY + oX]
    const y = this.arrChannelY[this.picParams.width * oY + oX]
    const k = this.arrChannelK[this.picParams.width * oY + oX]
    return {c, m, y, k}
  }

  findSquare(pixelIndedex, radius) {
    const rawY = Math.floor(pixelIndedex / this.picParams.width)
    const rawX = pixelIndedex % this.picParams.width
    let startX = rawX - radius
    let endX = rawX + radius
    let startY = rawY - radius
    let endY = rawY +  radius
    if (startX < 0) {
      startX = 0
    }
    if (endX >= this.picParams.width) {
      endX = this.picParams.width - 1
    }
    if (startY < 0) {
      startY = 0
    }
    if (endY >= this.picParams.height) {
      endY = this.picParams.height - 1
    }
    return {startX, endX, startY, endY}
  }

  imageBlur(blurRadius) {
    let newPixelArrY = []
    this.newImageArray = []
    this.blurChannelArr = []
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let square = this.findSquare(i, blurRadius)
      let pixelCount = 0 
      newPixelArrY = []
      for (let y = square.startY; y <= square.endY; y++) {
        for (let p = (this.picParams.width * y + square.startX); p <= (this.picParams.width * y + square.endX); p++) {
          newPixelArrY.push(this.arrChannelY[p])
          pixelCount++
        }
      }
      this.blurChannelArr[i] = Math.floor(newPixelArrY.reduce((sum, element) => sum + element, 0) / pixelCount)
    }
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.blurChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }

  findGradients() {
    let newPixelArrY = []
    let gradientArrX = []
    let gradientArrY = []
    let matrixX = [-1, 0, 1, -2, 0, 2, -1, 0, 1]
    let matrixY = [-1, -2, -1, 0, 0, 0, 1, 2, 1]
    this.newImageArray = []
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let square = this.findSquare(i, 1)
      let pixelCount = 0 
      newPixelArrY = []
      for (let y = square.startY; y <= square.endY; y++) {
        for (let p = (this.picParams.width * y + square.startX); p <= (this.picParams.width * y + square.endX); p++) {
          newPixelArrY.push(this.blurChannelArr[p])
          pixelCount++
        }
      }
      if (newPixelArrY.length < 9) {
        this.gradientsChannelArr[i] = 1
        this.grandientAngles[i] = 404
      }
      else {
        let sumX = 0
        let sumY = 0
        newPixelArrY.forEach((pix, index) => {
          sumX += pix * matrixX[index]
          sumY += pix * matrixY[index]
        })
        gradientArrX[i] = Math.floor(sumX)
        gradientArrY[i] = Math.floor(sumY)
        this.gradientsChannelArr[i] = Math.floor(Math.sqrt(Math.pow(gradientArrX[i], 2) + Math.pow(gradientArrY[i], 2)))
        this.grandientAngles[i] = (Math.atan2(Math.floor(sumY), Math.floor(sumX)) * 180) / Math.PI
      }
      if (this.gradientsChannelArr[i] == 0) {
        this.grandientAngles[i] = 404
      }
    }
    // console.log(this.gradientsChannelArr, 'XXXX', this.grandientAngles)
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.gradientsChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }



  nonmaximumRemove() {
    // let cyanHUI = []
    // let magHUI = []
    // let yellowHUI = []
    // let bHUI = []

    let max = {elm: 0, index: 0, gradient: -1}
    let newPixelArrY = []
    // let newOfAngelArr = []
    this.nonmaxChannelArr = []
    this.newImageArray = []
    this.arrChannelY.forEach((n, i) => this.nonmaxChannelArr[i] = 0)
    // let forgottenArr = []

    // this.arrChannelY.forEach((n, i) => {
    //   cyanHUI[i] = 0
    //   magHUI[i] = 0
    //   yellowHUI[i] = 0
    //   bHUI[i] = 0
    // })

    this.grandientAngles = this.grandientAngles.map((p, s) => {
      if (p > -23 && p <= 22 || (p > 159 && p <= 180) || p < -159) {
        // cyanHUI[s] = 255
        return 0
      }
      else if ((p > 23 && p <= 69) || (p <= -114 && p > -159)) {
        // magHUI[s] = 255
        return 135
      }
      else if ((p > 69 && p <= 114) || (p <= -69 && p > -114)) {
        // yellowHUI[s] = 255
        return 90
      }
      else if (p > 114 && p <= 159 || p <= -23 && p > -69) {
        // bHUI[s] = 255
        return 45
      }
      else {
        return 404
      }
    })

    // console.log(this.grandientAngles)
    // for (let i = 0; i < this.arrChannelY.length; i++) {
    //   this.newImageArray.push(cyanHUI[i], magHUI[i], yellowHUI[i], 255)
    // }


    for (let i = 0; i < this.arrChannelY.length; i++) {

    

      // if (!forgottenArr.includes(i)) {
      if (this.grandientAngles[i] != 404) {
        // console.log('fhfgj')
        newPixelArrY = []
        let lineNewPixAngleIndex = i
        let lineNewPixAngle = this.grandientAngles[i]
        const qGrandientAngle = this.grandientAngles[i]
        while (lineNewPixAngle == qGrandientAngle) {
          let rawY = Math.floor(lineNewPixAngleIndex / this.picParams.width)
          let rawX = lineNewPixAngleIndex % this.picParams.width
          // console.log('XYYYYYIXWAW', rawX, rawY, lineNewPixAngle)
          newPixelArrY.push({elm: this.gradientsChannelArr[lineNewPixAngleIndex], index: lineNewPixAngleIndex, gradient: lineNewPixAngle})
          
          // forgottenArr.push(lineNewPixAngleIndex)

          let newY
          let newX
          switch(this.grandientAngles[lineNewPixAngleIndex]) {
            case 0: 
              newY = rawY
              newX = rawX + 1
              break
            case 45: 
              newY = rawY + 1
              newX = rawX - 1
              break
            case 90:
              newY = rawY + 1
              newX = rawX
              break
            case 135:
              newY = rawY + 1
              newX = rawX + 1
              break 
          }
          this.grandientAngles[lineNewPixAngleIndex] = 404
          // if ((newX <= 0) || (newX >= (this.picParams.width - 1)) || (newY <= 0) || (newY >= (this.picParams.height - 1))) {
          //   break
          // }
          lineNewPixAngle = this.grandientAngles[this.picParams.width * newY + newX]
          // console.log('HUI', lineNewPixAngleIndex, newX, newY)
          lineNewPixAngleIndex = this.picParams.width * newY + newX
          // console.log('XXX', qGrandientAngle, lineNewPixAngle, lineNewPixAngleIndex)
        }
        max = newPixelArrY[0];
        for (let i = 0; i < newPixelArrY.length; i++) {
          if (newPixelArrY[i].elm > max.elm) {
            max = newPixelArrY[i]
          }
        }
        
        // newPixelArrY.forEach(n => {
        //   if (newPixelArrY[n.index] < max.elm) {
        //     this.nonmaxChannelArr[n.index] = 0
        //   }
        // })
        this.nonmaxChannelArr[max.index] = max.elm
      }
    }
    // console.log(this.nonmaxChannelArr)
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.nonmaxChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }





    //     // console.log(newPixelArrY)
    //     max = newPixelArrY[0];
    //     for (let i = 0; i < newPixelArrY.length; i++) {
    //       if (newPixelArrY[i].elm > max.elm) {
    //         max = newPixelArrY[i]
    //       }
    //     }
    //     newPixelArrY.forEach(n => {
    //       if (newPixelArrY[n.index] <= max.elm) {
    //         this.nonmaxChannelArr[n.index] = 0
    //       }
    //     })
    //     this.nonmaxChannelArr[max.index] = max.elm
    //   }
    // }
    // for (let i = 0; i < this.arrChannelY.length; i++) {
    //   let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.nonmaxChannelArr[i])
    //   this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    // }

    // this.nonmaxChannelArr = this.gradientsChannelArr

      // let square = this.findSquare(i, 1)
      // newPixelArrY = []
      // for (let y = square.startY; y <= square.endY; y++) {
      //   for (let p = (this.picParams.width * y + square.startX); p <= (this.picParams.width * y + square.endX); p++) {
      //     newPixelArrY.push({elm: this.gradientsChannelArr[p], index: p, gradient: this.grandientAngles[p]})
      //   }
      // }
      // if (newPixelArrY.length < 9) {
      //   newPixelArrY = []
      //   for (let i = 0; i < 9; i++) {
      //     newPixelArrY.push({elm: 1, index: i, gradient: -1})
      //   }
      // }
      // switch(this.grandientAngles[i]) {
      //   case 0: 
      //     newOfAngelArr = [newPixelArrY[3], newPixelArrY[4], newPixelArrY[5]]
      //     newOfAngelArr = newOfAngelArr.filter(n => n.gradient == 0)
      //     if (newOfAngelArr.length == 0) {
      //       newOfAngelArr = [{elm: 0, index: i, gradient: -1}]
      //     }
      //     break
      //   case 45: 
      //     newOfAngelArr = [newPixelArrY[2], newPixelArrY[4], newPixelArrY[6]]
      //     newOfAngelArr = newOfAngelArr.filter(n => n.gradient == 45)
      //     break
      //   case 90: 
      //     newOfAngelArr = [newPixelArrY[1], newPixelArrY[4], newPixelArrY[7]]
      //     newOfAngelArr = newOfAngelArr.filter(n => n.gradient == 90)
      //     break
      //   case 135: 
      //     newOfAngelArr = [newPixelArrY[0], newPixelArrY[4], newPixelArrY[8]]
      //     newOfAngelArr = newOfAngelArr.filter(n => n.gradient == 135)
      //     break
      //   default: 
      //     newOfAngelArr = [{elm: 0, index: i, gradient: -1}]
      // }
      // max = newOfAngelArr[0];
  }

  trasholds(lowLimit, upLimit) {
    this.trasholdsChannelArr = []
    this.newImageArray = []
    this.expsArr = []
    this.nonmaxChannelArr.forEach((v, i) => {
      if (v > upLimit) {
        this.trasholdsChannelArr[i] = 100
      }
      if (v < lowLimit) {
        this.trasholdsChannelArr[i] = 0
      }
      if (v > lowLimit && v < upLimit) {
        this.trasholdsChannelArr[i] = 50
        this.expsArr.push(i)
      }
    })
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.trasholdsChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }

  removeExp() {
    let newPixelYSum 
    this.expsArr.forEach(i => {
      let square = this.findSquare(i, 1)
      newPixelYSum = 0
      for (let y = square.startY; y <= square.endY; y++) {
        for (let p = (this.picParams.width * y + square.startX); p <= (this.picParams.width * y + square.endX); p++) {
          newPixelYSum += this.trasholdsChannelArr[p]
        }
      }
      if (this.trasholdsChannelArr[i] == newPixelYSum) {
        this.trasholdsChannelArr[i] = 0
      }
      else {
        this.trasholdsChannelArr[i] = 100
      }
    })
    this.newFLUchannel = this.trasholdsChannelArr
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.trasholdsChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }

  generateFLUImage() {
    let currentPixC
    this.newImageArray = []
    for (let i = 0; i < this.arrChannelY.length; i++) {
      if (this.newFLUchannel[i] == 0) {
        currentPixC = this.arrChannelY[i]
      }
      else {
        currentPixC = this.newFLUchannel[i]
      }
      let newPixel = this.rgbCmykService.cmyk2rgb(this.arrChannelC[i], this.arrChannelM[i], currentPixC, this.arrChannelK[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }
}
