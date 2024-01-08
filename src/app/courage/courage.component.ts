import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courage',
  templateUrl: './courage.component.html',
  styleUrls: ['./courage.component.scss']
})
export class CourageComponent implements OnInit {
  show: boolean = true;
  courageCount: number = 0;
  courageCheckboxes = [
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
    this.courageCount = 0;
    this.courageCheckboxes.forEach(x => {
      if (x.checked) {
        this.courageCount ++;
      }
    });
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}

