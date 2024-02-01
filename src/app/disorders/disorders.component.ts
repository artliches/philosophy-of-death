import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disorders',
  templateUrl: './disorders.component.html',
  styleUrls: ['./disorders.component.scss']
})
export class DisordersComponent implements OnInit {
  show: boolean = true;
  showFirstSection: boolean = false;
  showSecondSection: boolean = false;
  showThirdSection: boolean = false;

  sectionsToShow = [
    true, false, false
  ];

  contentSectionToShow = [
    false, false, false
  ];

  chosenDisorders = [
    {
      name: '',
      descrip: ``,
    },
    {
      name: '',
      descrip: ``,
    },
    {
      name: '',
      descrip: ``,
    },
  ];

  filteredDisorders: any;

  disorders = [
    {
      name: 'AICHMOPHOBIA',
      descrip: `
      <em>
        Sharp things make you uncomfortable. It's just a matter of time before someone cuts themselves.
      </em>
      <p>
        You cannot activate or depart with axes, swords, spears, daggers, scythes, or katars in your gear grid.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'ANXIETY',
      descrip: `
      <em>
      You are afraid of being afraid. You're a nervous wreck, and monsters can smell this in your scent.</em>
      <p>
      At the start of each showdown, gain the priority target token unless you have stinky gear in your gear grid.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'APATHETIC',
      descrip: `
      <em>
      You've given up. Nothing seems to matter. You have no concern for your own wellbeing.
      </em>
      <p>
      You cannot use or gain survival.
      You cannot gain courage.
      <p>Cure this disorder if you have 8+ understanding.</p>
      </p>
      `,
      chosen: false,
    },
    {
      name: 'BINGE EATING',
      descrip: `
      <em>
      Eating is the only thing that helps you escape your miserable life.
      </em>
      <p>
      You cannot depart unless you have consumable gear in your gear grid.

      <p>You must consume if a choice to consume arises.</p>
      </p>
      `,
      chosen: false,
    },
    {
      name: 'COPROLALIA',
      descrip: `
      <em>
      You have compulsive tics in the form of sporadic muttering, cursing, whimpering, and screaming.
      </em>
      <p>
      All your gear is noisy.
      You are always a threat unless you are knocked down, even if an effect says otherwise.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'FEAR OF THE DARK',
      descrip: `
      <em>
      You cannot bear the oppressive darkness any longer.
      </em>
      <p>
      You retire.

      <p>If you gain this disorder during a hunt or showdown, you put on a brave face until you return to the settlement, vowing never to leave the Lantern Hoard again.</p>
      </p>
      `,
      chosen: false,
    },
    {
      name: 'HEMOPHOBIA',
      descrip: `
      <em>
      The mere sight of blood makes you lightheaded, and serious gore can knock you out!
      </em>
      <p>
      During the showdown, whenever a survivor (including you) gains a bleeding token, you are knocked down.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'HOARDER',
      descrip: `
      <em>
      You compulsively collect and stash anything you can get your hands on. Every little bit you add to your secret hoard makes your existence feel more real.</em>
      <p>
      Whenever you are a returning survivor, archive 1 resource gained from the last showdown and gain +1 courage.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'HONORABLE',
      descrip: `
      <em>
      You believe in honor and fairness when conducting yourself on the battlefield. It is these strong principles that have kept you alive, and you will not abandon them under any circumstances.</em>
      <p>
      You cannot attack a monster from its blind spot or if it is knocked down.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'HYPERACTIVE',
      descrip: `
      <em>
      Whether you are running, fiddling with your gear, or pacing, you are always moving.
      </em>
      <p>
      During the showdown, you must move at least 1 space every round.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'IMMORTAL',
      descrip: `
      <em>
      You are immortal! You will live forever and cannot be killed.
      </em>
      <p>
      While you are insane, convert all damage dealt to your hit locations to brain damage.

      <p>You are so busy reveling in your own glory that you cannot spend survival while insane.</p>
      </p>
      `,
      chosen: false,
    },
    {
      name: 'IMMORTAL',
      descrip: `
      <em>
      You are immortal! You will live forever and cannot be killed.
      </em>
      <p>
      While you are insane, convert all damage dealt to your hit locations to brain damage.

      <p>You are so busy reveling in your own glory that you cannot spend survival while insane.</p>
      </p>
      `,
      chosen: false,
    },
    {
      name: 'INDECISION',
      descrip: `
      <em>
      Past decisions haunt you ceaselessly. You are crippled by indecision, and even the most trivial choices grip you with terror.      </em>
      <p>
      If you are the event revealer of hunt events that call on you to make a roll, roll twice and use the lower result.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'MONSTER PANIC',
      descrip: `
      <em>
      Monsters make you feel bad. Really, really bad.
      </em>
      <p>
      Whenever you suffer brain damage from an intimidate action, suffer 1 additional brain damage.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'POST-TRAUMATIC STRESS',
      descrip: `
      <em>
      The last hunt was harrowing. All you can do is cower and relive the trauma. Only time can heal your wounds.      </em>
      <p>
      Next settlement phase, you do not contribute or participate in any endeavors.
      <p>Skip the next hunt to recover. Remove this disorder.</p>
      </p>
      `,
      chosen: false,
    },
    {
      name: 'PREY',
      descrip: `
      <em>
      You are prey. All there is for you is death.
      </em>
      <p>
      You may not spend survival unless you are insane.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'QUIXOTIC',
      descrip: `
      <em>
      You carry the weight of your settlement on your shoulders. Everyone is counting on you to save them, and you will rise to the challenge.
      </em>
      <p>
      If you are insane when you depart, gain +1 survival and +1 strength token.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'RAGEHOLIC',
      descrip: `
      <em>
      Your rage boils out of control, causing you to see red at the slightest provocation.      </em>
      <p>
      Whenever you suffer a severe injury, also suffer the frenzy brain trauma.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'SECRETIVE',
      descrip: `
      <em>
      You love secrets. So much, in fact, that you pretend to have many.
      </em>
      <p>
      When you are a returning survivor, you quickly become preoccupied with your own affairs. You must skip the next hunt to deal with them.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'SEIZURES',
      descrip: `
      <em>
      Lingering damage from your head injuries has caused you to experience periods of uncontrollable shaking and absence of thought.      </em>
      <p>
      During the showdown, whenever you suffer damage to your head location, you are knocked down.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'SQUEAMISH',
      descrip: `
      <em>
      You can't handle bad smells.
      </em>
      <p>
      You cannot depart with any stinky gear in your gear grid. If a status or effect would cause you to become stinky, lose all your survival.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'TRAUMATIZED',
      descrip: `
      <em>
      Your experiences have left you shaken and paralyzed by fear.
      </em>
      <p>
      Whenever you end your act adjacent to a monster, you are knocked down.
      </p>
      `,
      chosen: false,
    },
    {
      name: 'VESTIPHOBIA',
      descrip: `
      <em>
      Even the lightest armor rubs harshly against your skin and constricts your ability to move.      </em>
      <p>
      You cannot wear armor at the body location. If you are wearing armor at the body location when you gain this disorder, archive it as you tear it off your person!
      </p>
      `,
      chosen: false,
    },
    {
      name: 'WEAK SPOT',
      descrip: `
      <em>
      You have an imaginary infirmity.
      </em>
      <p>
      When you gain this disorder, roll a random hit location and record it. You cannot depart unless you have armor at this hit location.
      </p>
      `,
      chosen: false,
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.filteredDisorders = JSON.parse(JSON.stringify(this.disorders));
  }

  chooseDisorder(chosen: string, index: number) {
    // get chosenDisorder
    const chosenDisorder = this.disorders.find(x => x.name === chosen);

    if (this.chosenDisorders[index].name !== '') {
      const prevChosen = this.disorders.find(x => x.name === this.chosenDisorders[index].name);
      if (prevChosen) prevChosen.chosen = false;
    }
    if (chosenDisorder) {
      chosenDisorder.chosen = true;
      this.chosenDisorders[index] = chosenDisorder;

      this.filteredDisorders = this.deepCopyArray(this.disorders);
    }
  }

  filterDisorders(searchTerm: string) {
    this.filteredDisorders = JSON.parse(JSON.stringify(this.disorders.filter(x => x.name.includes(searchTerm.toUpperCase()))));
  }

  resetFilter() {
    this.filteredDisorders = JSON.parse(JSON.stringify(this.disorders));
  }

  removeDisorder(index: number) {
    // reset flag on removed index
    const disorderToModify = this.disorders.find(x => x.name === this.chosenDisorders[index].name);
    if (disorderToModify) {
      disorderToModify.chosen = false;
    }
    this.filteredDisorders.find((x: { name: string; }) => x.name === this.chosenDisorders[index].name).chosen = false;
    this.chosenDisorders[index] = {name: '', descrip: ''};
  }

  deepCopyArray(array: any[]) {
    return JSON.parse(JSON.stringify(array));
  }
}
