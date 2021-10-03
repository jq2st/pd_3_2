import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  labels = []
  compare = {
    1: 'Изъятие нескольких уровней в диапазоне канала',
    2: 'Введение штрихового кода в тоновый диапазон канала RGB',
    3: 'Введение 2D штрихового кода (QR) в цифровое изображение',
    4: 'Изъятие 20-30 уровней в диапазоне',
    5: 'Введение флуоресцентного тонера'
  }

  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.api.getHistory()
      .subscribe((res: any[]) => {
        console.log(res)
        this.labels = res
      })
  }

  getFile(file) {
    window.open(file)
  }
}
