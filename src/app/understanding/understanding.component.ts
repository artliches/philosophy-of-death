import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understanding',
  templateUrl: './understanding.component.html',
  styleUrls: ['./understanding.component.scss']
})
export class UnderstandingComponent implements OnInit {
  show: boolean = true;
  understandingCount: number = 0;
  understandingCheckboxes = [
    {
      id: 1,
      checked: false,
    },
    {
      id: 2,
      checked: false,
    },
    {
      id: 3,
      checked: false,
    },
    {
      id: 4,
      checked: false,
    },
    {
      id: 5,
      checked: false,
    },
    {
      id: 6,
      checked: false,
    },
    {
      id: 7,
      checked: false,
    },
    {
      id: 8,
      checked: false,
    },
    {
      id: 9,
      checked: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  checkChanged() {
    this.understandingCount = 0;
    this.understandingCheckboxes.forEach(x => {
      if (x.checked) {
        this.understandingCount ++;
      }
    });
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}