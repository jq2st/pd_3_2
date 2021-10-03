import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MethodsService {

    _serverUrl = 'https://pd-markerovka2-nest.herokuapp.com/'

    constructor(private http: HttpClient) {}

    methodI2030(image: File, params: any) {
        console.log(params)
        const formData: FormData = new FormData()
        formData.append('image', image, image.name)
        formData.append('params', JSON.stringify(params))
        return this.http.post(this._serverUrl +'/methods/method-I2030/result', formData)
    }

    methodIRGB(image: File, params: any) {
        console.log(params)
        const formData: FormData = new FormData()
        formData.append('image', image, image.name)
        formData.append('params', JSON.stringify(params))
        return this.http.post(this._serverUrl +'/methods/method-IRGB/result', formData)
    }

    methodBC(image: File, params: any) {
        console.log(params)
        const formData: FormData = new FormData()
        formData.append('image', image, image.name)
        formData.append('params', JSON.stringify(params))
        return this.http.post(this._serverUrl + '/methods/method-BC/result', formData)
    }
    
    methodQR(image, code, params) {
        const formData: FormData = new FormData()
        formData.append('image', image, image.name)
        formData.append('code', code, code.name)
        formData.append('params', JSON.stringify(params))
        console.log(params)
        return this.http.post(this._serverUrl + '/methods/method-QR/result', formData)
    }

    getColorLayersRGB(image: any) {
        const formData: FormData = new FormData()
        formData.append('image', image, image.name)
        return this.http.post(this._serverUrl + '/methods/color-layers/rgb', formData)
    }

    getChartsValuesRGB(image: any) {
        console.error(image)
        const formData: FormData = new FormData()
        formData.append('image', image, image.name)
        return this.http.post(this._serverUrl + '/methods/charts-values/rgb', formData)
    }

    getChartsValuesCMYK(image: any) {
        const formData: FormData = new FormData()
        formData.append('image', image, image.name)
        return this.http.post(this._serverUrl + '/methods/charts-values/cmyk', formData)
    }

}