import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent implements OnInit {
  show: boolean = true;
  lBrain: boolean = false;
  hHead: boolean = false;
  arms = [
    {
      id: 'light',
      checked: false
    },
    {
      id: 'heavy',
      checked: false,
    }
  ];
  body = [
    {
      id: 'light',
      checked: false
    },
    {
      id: 'heavy',
      checked: false,
    }
  ];
  waist = [
    {
      id: 'light',
      checked: false
    },
    {
      id: 'heavy',
      checked: false,
    }
  ];
  legs = [
    {
      id: 'light',
      checked: false
    },
    {
      id: 'heavy',
      checked: false,
    }
  ];

  headInjuries = [
    {
      id: 'INTRACRANIAL HEMORRHAGE',
      descrip: 'no gain or spend survival.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        }
      ]
    },
    {
      id: 'DEAF',
      descrip: '-1 evasion.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        }
      ]
    },
    {
      id: 'BLIND',
      descrip: '-1 accuracy / -4 accuracy & retire.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
        {
          id: 2,
          checked: false,
        },
      ]
    },
    {
      id: 'SHATTERED JAW',
      descrip: 'no consume or encourage.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
      ]
    },
  ];

  armsInjuries = [
    {
      id: 'DISMEMBERED ARM',
      descrip: 'no two-handed / no weapons.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
        {
          id: 2,
          checked: false,
        },
      ]
    },
    {
      id: 'RUPTURED MUSCLE',
      descrip: 'no fighting arts or knowledges.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
      ]
    },
    {
      id: 'CONTRACTURE',
      descrip: '-1 accuracy.',
      checkboxes: [
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
      ]
    },
    {
      id: 'BROKEN ARM',
      descrip: '-1 accuracy & -1 strength.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
        {
          id: 2,
          checked: false,
        },
      ]
    },
  ];

  bodyInjuries = [
    {
      id: 'GAPING CHEST WOUND',
      descrip: '-1 strength.',
      checkboxes: [
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
      ]
    },
    {
      id: 'DESTROYED BACK',
      descrip: '-2 movement & no gear with +2 strength.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
      ]
    },
    {
      id: 'BROKEN RIB',
      descrip: '-1 speed.',
      checkboxes: [
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
      ]
    },
  ];

  waistInjuries = [
    {
      id: 'INTESTINAL PROLAPSE',
      descrip: 'no gear on waist.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
      ]
    },
    {
      id: 'WARPED PELVIS',
      descrip: '-1 luck.',
      checkboxes: [
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
      ]
    },
    {
      id: 'DESTROYED GENITALS',
      descrip: 'no intimacy.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
      ]
    },
    {
      id: 'BROKEN HIP',
      descrip: 'no dodge & -1 movement.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
      ]
    },
  ];

  legInjuries = [
    {
      id: 'DISMEMBERED LEG',
      descrip: '-2 movement & no dash / -4 movement & retire.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
        {
          id: 2,
          checked: false,
        },
      ]
    },
    {
      id: 'HAMSTRUNG',
      descrip: 'no fighting arts, abilities, or knowledges.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
      ]
    },
    {
      id: 'BROKEN LEG',
      descrip: '-1 movement.',
      checkboxes: [
        {
          id: 1,
          checked: false,
        },
        {
          id: 2,
          checked: false,
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
