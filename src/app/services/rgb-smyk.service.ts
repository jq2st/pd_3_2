import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RgbCmykService {

  constructor() { }

  rgb2cmyk(r, g, b, normalized?) {
    var c = 1 - (r / 255);
    var m = 1 - (g / 255);
    var y = 1 - (b / 255);
    var k = Math.min(c, Math.min(m, y));

    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);

    if(!normalized){
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
    }
    
    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;
    
    return {
      c: c,
      m: m,
      y: y,
      k: k
    }
}

cmyk2rgb(c, m, y, k, normalized?){
  c = (c / 100);
  m = (m / 100);
  y = (y / 100);
  k = (k / 100);
    
  c = c * (1 - k) + k;
  m = m * (1 - k) + k;
  y = y * (1 - k) + k;
    
  var r = 1 - c;
  var g = 1 - m;
  var b = 1 - y;
    
  if(!normalized){
    r = Math.round(255 * r);
    g = Math.round(255 * g);
    b = Math.round(255 * b);
  }
    
  return {
    r: r,
    g: g,
    b: b
    }
  }
}
