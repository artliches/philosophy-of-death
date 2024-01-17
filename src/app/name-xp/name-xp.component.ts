import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-xp',
  templateUrl: './name-xp.component.html',
  styleUrls: ['./name-xp.component.scss']
})
export class NameXpComponent implements OnInit {
  chosenWeapon: string = '';
  count: number = 0;
  weaponInfo: any = '';
  currentXP: number = 0;
  currentWeaponProf: number = 0;
  xpCheckboxes = [
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
    {
      id: 10,
      checked: false,
    },
    {
      id: 11,
      checked: false,
    },
    {
      id: 12,
      checked: false,
    },
    {
      id: 13,
      checked: false,
    },
    {
      id: 14,
      checked: false,
    },
    {
      id: 15,
      checked: false,
    },
    {
      id: 16,
      checked: false,
    },
  ];
  checkBoxes = [
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
  ];
  weapons = ['AXE', 'BOW', 'CLUB', 'DAGGER', 'FIST & TOOTH', 'GRAND', 'KATANA', 'KATAR', 'SCYTHE', 'SHIELD', 'SPEAR', 'SWORD', 'TWILIGHT SWORD', 'WHIP'];
  masteries = [
    {
      name: 'TWILIGHT SWORD',
      rankInfo: {
        2: 'Ignore Cumbersome on Twilight Sword.',
        4: 'Ignore slow and gain +2 speed with Twilight Sword.',
        6: 'Twilight Sword Gains Deadly.'
      }
    },
    {
      name: 'AXE',
      rankInfo: {
        1: 'When attacking with an axe, if your wound attempt fails, you may ignore it and attempt to wound the selected hit location again. Limit, once per attack.',
        2: 'When wounding a monster with an axe at a location with a persistent injury, that wound becomes a critical wound.'
      }
    },
    {
      name: 'BOW',
      rankInfo: {
        1: 'When attacking with a bow, you may reroll any misses once. Limit, once per attack.',
        2: 'All bows in your gear grid gain Deadly 2. In addition, ignore cumbersome on all bows.'
      }
    },
    {
      name: 'CLUB',
      rankInfo: {
        1: 'When attacking with a club, on a Perfect hit, double your wound attempt total on the first selected hit location. Limit, once per attack.',
        2: 'When attacking with a club, if a successful wound attempt total is greater than or equal to twice the monster\'s toughness, inflict an additional wound.'
      }
    },
    {
      name: 'DAGGER',
      rankInfo: {
        1: 'When attacking with a Dagger, if a wound attempt fails, after performing any reactions, you may discard another drawn hit location card to attempt to wound the failed hit location again. Limit, once per attack.',
        2: 'After a wounded hit location is discarded, if you are adjacent to the attacker and the wounded monster may spend 1 survival to re-draw the wounded hit location and attempt to wound with a dagger. Treat monster reactions on the re-drawn hit location card normally.'
      }
    },
    {
      name: 'FIST & TOOTH',
      rankInfo: {
        1: 'You may stand (if knocked down) at the start of the monster\'s turn or the survivor\'s turn. Limit, once per round.',
        2: 'Gain +2 permanent accuracy and +2 permanent strength.'
      }
    },
    {
      name: 'GRAND',
      rankInfo: {
        1: 'When attacking with a grand weapon, gain +1 accuracy. When attacking with a grand weapon during your act, if you critically wound, the monster is knocked down.',
        2: 'Perfect Hits with a grand weapon cancels all reactions for that attack.'
      }
    },
    {
      name: 'KATAR',
      rankInfo: {
        1: 'When attacking with a katar, cancel reactions on the first selected hit locations.',
        2: 'Gain a +1 evasion token on a Perfect Hit with a katar. When you are knocked down, remove all +1 evasion tokens.'
      }
    },
    {
      name: 'KATANA',
      rankInfo: {
        1: 'On your first Perfect hit each attack with a Katana, do not draw a hit location. The monster suffers 1 wound.',
        2: 'Increase your Perfect Hit range by 2. If you are Blind, increase your Perfect Hit range by 4.'
      }
    },
    {
      name: 'SCYTHE',
      rankInfo: {
        1: 'When you critically wound with a scythe, roll 1d10. On a 6+, shuffle the hit location deck (do not shuffle unresolved hit locations). Limit, once per round.',
        2: 'If you start your act insane, gain +1 Activation, which you may only spend to activate scythes.'
      }
    },
    {
      name: 'SHIELD',
      rankInfo: {
        1: 'While a shield is in your gear grid, you are no longer knocked down after Collision with a monster and add 1 armor to all hit locations.',
        2: 'When adjacent to a survivor that is targeted by a monster, you may swap spaces on the board with the survivor and become the target instead. You must have a shield to perform this.'
      }
    },
    {
      name: 'SPEAR',
      rankInfo: {
        1: 'When attacking with a spear, if you draw a trap, roll 1d10. On a 7+, cancel the trap. Discard it, then reshuffle the hit location discard into the hit location deck and draw a new card. Limit, once per round.',
        2: 'When you hit a monster with a spear, you may spend 1 survival to gain the priority target token. If you made the hit from directly behind another survivor, that survivor gains the priority target token instead.'
      }
    },
    {
      name: 'SWORD',
      rankInfo: {
        1: 'When attacking with a sword, after drawing hit locations, make a wound attempt and then select a hit location to resolve with that result. Limit, once per attack.',
        2: 'Gain +1 accuracy, +1 strength, and +1 speed when attacking with a sword.'
      }
    },
    {
      name: 'WHIP',
      rankInfo: {
        1: 'When you wound with a whip, instead of moving the top card of the AI deck into the wound stack, you may move the top card of the AI discard pile. Limit, once per attack.',
        2: 'Gain +5 strength when attacking with a whip.'
      }
    },
  ];
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  checkChanged() {
    this.count = 0;
    this.checkBoxes.forEach(x => {
      if (x.checked) {
        this.count++;
      }
    });
  }

  selectedWeapon() {
    this.weaponInfo = this.masteries.find(x => x.name === this.chosenWeapon);
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
