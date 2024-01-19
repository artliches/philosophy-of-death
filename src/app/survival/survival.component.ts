import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.scss']
})
export class SurvivalComponent implements OnInit {
  show: boolean = true;
  noSpend: boolean = false;
  noGain: boolean = false;
  dodge: boolean = true;
  encourage: boolean = false;
  surge: boolean = false;
  dash: boolean = false;
  fist: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
