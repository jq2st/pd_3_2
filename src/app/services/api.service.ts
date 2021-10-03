import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _serverUrl = 'https://pd-markerovka2-nest.herokuapp.com/'

  constructor(private http: HttpClient) { }

  checkImg(img, size) {
    let fd = new FormData()
    fd.append('image', img, img.name)
    fd.append('size', size)
    return this.http.post(this._serverUrl + 'check', fd)
  }

  addToDb(type, img, size) {
    let fd = new FormData()
    fd.append('image', img, img.name)
    fd.append('size', size)
    fd.append('type', type)
    return this.http.post(this._serverUrl + 'methods/' + type, fd)
  }

  getHistory() {
    return this.http.get(this._serverUrl + 'history')
  }

  m5updateEdges(blurRadius, trasholdL, trasholdU) {
    return this.http.post(this._serverUrl + 'methods/5', {blurRadius, trasholdL, trasholdU})
  }

 dataURItoBlob(dataURI) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
}

}
