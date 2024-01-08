import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fighting-arts',
  templateUrl: './fighting-arts.component.html',
  styleUrls: ['./fighting-arts.component.scss']
})
export class FightingArtsComponent implements OnInit {
  chosenFightingArt: any = '';
  chosenSecretArt: any = '';
  showFightingArts: boolean = false;
  showSecretArts: boolean = false;

  fightingArts = [
    {
      name: 'AMBIDEXTROUS',
      descrip: `
      All melee weapons in your gear grid gain paired. Cannot be used if there are any shields, two-handed, or heavy gear in your gear grid.
      `
    },
    {
      name: 'BERSERKER',
      descrip: `
      Once per showdown, you may spend activation to suffer bash and the frenzy brain trauma.
      `
    },
    {
      name: 'CLUTCH FIGHTER',
      descrip: `
      While you have 3 or more bleeding tokens, gain +1 strength and +1 accuracy.
      `
    },
    {
      name: 'COMBO MASTER',
      descrip: `
      On a perfect hit make 1 additional attack roll.
      `
    },
    {
      name: 'CRAZED',
      descrip: `
      On a perfect hit, gain +1 insanity.
      `
    },
    {
      name: 'CROSSARM BLOCK',
      descrip: `
      Whenever you are hit, after hit locations are rolled, you may change 1 result to the arms hit location.      `
    },
    {
      name: 'DOUBLE DASH',
      descrip: `
      During your act, once per round, you may spend Activation to gain Movement
      `
    },
    {
      name: 'EXTRA SENSE',
      descrip: `
      You may dodge 1 additional time per round.
      `
    },
    {
      name: 'LAST MAN STANDING',
      descrip: `
      While you are the only survivor on the showdown board, you may not gain bleeding tokens or be knocked down.      `
    },
    {
      name: 'LEADER',
      descrip: `
      Whenever you encourage a survivor, they gain +1 speed token until the end of the round. Once per hunt phase, you may inspire another survivor. They use your understanding and courage to resolve a hunt or story event.
      `
    },
    {
      name: 'MIGHT STRIKE',
      descrip: `
      On a perfect hit, gain +2 strength until the end of the attack.      `
    },
    {
      name: 'MONSTER CLAW STYLE',
      descrip: `
      Your Fist & Tooth attacks gain +1 accuracy, +1 strength and savage.
      `
    },
    {
      name: 'ORATOR OF DEATH',
      descrip: `
      Once per showdown, you may spend Activation to have all non-deaf survivors gain +2 insanity. When you die, you encourage all survivors with your last words.`
    },
    {
      name: 'RHYTHM CHASER',
      descrip: `
      On Arrival, gain +1 evasion token. When you are knocked down, if you don't have an instrument in your gear grid, remove all your +1 evasion tokens. Cannot be used if there is any heavy gear in your gear grid.
      `
    },
    {
      name: 'STRATEGIST',
      descrip: `
      During the showdown setup, after placing terrain, you may add a Giant Stone Face or a Toppled Pillar terrain card to the showdown board.
      `
    },
    {
      name: 'THRILL SEEKER',
      descrip: `
      Whenever you gain survival during the showdown phase, gain 1 additional survival.
      `
    },
    {
      name: 'TIMELESS EYE',
      descrip: `
      Your attack roll is a perfect hit on a result of 9 or 10. Cannot be used if you have the blind severe head injury.
      `
    },
    {
      name: 'TOUGH',
      descrip: `
      When rolling on a severe injury table, unless you roll a 1, add +1 to the result. Cannot exceed 10.
      `
    },
    {
      name: 'TUMBLE',
      descrip: `
      When something would collide with you, roll 1d10. On a result of 6+, you successfully tumble out of harms way. Instead, place your survivor standing on the closest free space outside of the collision path.
      `
    },
    {
      name: 'UNCONSCIOUS FIGHTER',
      descrip: `
      It takes 7 bleeding tokens to kill you.
      `
    },
  ];

  secretFightArts = [
    {
      name: 'BEAST OF CARATOSIS',
      descrip: `
      You may <strong>Concentrate</strong>. If you do, perform Beast of Caratosis at the start of your next act.
      <p><strong>Beast of Caratosis:</strong> You reach into the dream and disappear in a shimmer of heat.</p>
      <p>Place your survivor adjacent to the monster. Activate a weapon in your grid and attack the monster. For this attack, your attack speed is equal to your red affinities, you hit automatically, and you gain strength equal to double your red affinities. Then, gain +6 Hunt XP.</p>
      `
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  chooseFA(chosenFA: string, isSecret: boolean) {
    if (isSecret) {
      this.chosenSecretArt = this.secretFightArts.find(x => x.name === chosenFA);
    } else {
      this.chosenFightingArt = this.fightingArts.find(x => x.name === chosenFA);
    }
  }

}
