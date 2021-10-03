import { Injectable } from "@angular/core";
import { MethodsService } from "../services/methods/methods.service";

@Injectable({
    providedIn: 'root'
}) 
export class MethodsFacade {

    constructor(private methodsService: MethodsService) {}

    getI2030Result(image, params) {
        return this.methodsService.methodI2030(image, params)
    }

    getIRGBResult(image, params) {
        return this.methodsService.methodIRGB(image, params)
    }

    getBCResult(image, params) {
        return this.methodsService.methodBC(image, params)
    }

    getQRResult(image, code, params) {
        return this.methodsService.methodQR(image, code, params)
    }

    getColorLayersRGB(image) {
        return this.methodsService.getColorLayersRGB(image)
    }

    getChartsValuesRGB(image) {
        return this.methodsService.getChartsValuesRGB(image)
    }

    getChartsValuesCMYK(image) {
        return this.methodsService.getChartsValuesCMYK(image)
    }

}