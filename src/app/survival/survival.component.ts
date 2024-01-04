import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survival',
  templateUrl: './survival.component.html',
  styleUrls: ['./survival.component.scss']
})
export class SurvivalComponent implements OnInit {
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}
