import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meth-five-page',
  templateUrl: './meth-five-page.component.html',
  styleUrls: ['./meth-five-page.component.css']
})
export class MethFivePageComponent implements OnInit {

  method = 'Введение флуоресцентного тонера'
  step: number = 1

  constructor() { }

  ngOnInit() {
  }

  lastStep() {
    this.step--;
  }
  nextStep() {
    this.step++;
  }
}
