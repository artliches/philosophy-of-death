import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fighting-arts',
  templateUrl: './fighting-arts.component.html',
  styleUrls: ['./fighting-arts.component.scss']
})
export class FightingArtsComponent implements OnInit {
  show: boolean = true;
  chosenFightingArt: any = '';
  chosenSecretArt: any = '';
  showFightingArts: boolean = false;
  showSecretArts: boolean = false;
  filteredFA: any;
  filteredSA: any;

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
      name: 'MIGHTY STRIKE',
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
    {
      name: 'BLACK GUARD STYLE',
      descrip: `
      Swords in your gear grid gain Block 1.
      <p>When you block a hit with a sword, your next attack that round with a sword gains +2 accuracy. +2 strength, and +2 speed. Limit, once per round.</p>
      <p>During the settlement phase, you may spend an Endeavor to train a survivor. They gain the Black Guard Style secret fighting art. You lose it and suffer the broken arm severe injury.</p>
      `
    },
    {
      name: 'BONE WHISPERER',
      descrip: `
      <p>When another survivor dies on the showdown board, place a token where they died. If you pass over it, remove the token and eat their skull. Heal your survivor and roll 1d10 + your Hunt XP</p>
      <table>
        <tr>
          <th>1d10</th>
          <th>RESULT</th>
        </tr>
        <tr>
          <td>1-3</td>
          <td>You feel amazing! Gain +1 permanent movement, speed, and evasion.</td>
        </tr>
        <tr>
          <td>4-8</td>
          <td>Gain +1 permanent strength.</td>
        </tr>
        <tr>
          <td>9-18</td>
          <td>Gain a fighting art and +5 survival.</td>
        </tr>
        <tr>
          <td>19+</td>
          <td>You run away into exile. At the end of the showdown you are gone forever.</td>
        </tr>
      </table>
      `
    },
    {
      name: 'GRACE OF DORMENATUS',
      descrip: `
      You may <strong>Concentrate</strong>. If you do, perform Grace of Dormenatus at the start of your next act.
      <p><strong>Grace of Dormenatus:</strong> You reach into the dream and remove a twisting green crown. The crown explodes. A glittering rain of shards coats the survivors.</p>
      <p>All survivors gain armor at all hit locations equal to your green affinities. They may remove up to the same number of tokens. Then, gain +6 Hunt XP. If you still exist, gain the priority target token.</p>
      `
    },
    {
      name: 'KING OF A THOUSAND BATTLES',
      descrip: `
      Gain +2 accuracy, +2 strength, +2 evasion.
      You may dodge any number of times in a round.
      <p>Only 1 survivor may have this Secret Fighting Art.</p>
      `
    },
    {
      name: 'KING\'S STEP',
      descrip: `
      Whenever you attack, you may discard any number of Battle Pressure hit locations drawn and draw an equal number of new hit locations.
      <p>Whenever you attack, after drawing hit locations, but before rolling to wound, you may choose one hit location drawn and discard it to draw a new hit location.</p>
      <p>Traps will cancel these effects.</p>
      `
    },
    {
      name: 'LEGENDARY LUNGS',
      descrip: `
      Once per attack, for each successful hit, make an additional attack roll.
      `
    },
    {
      name: 'LUCERNAE\'S LANTERN',
      descrip: `
      You may <strong>Concentrate</strong>. If you do, perform Lucernae's Lantern at the start of your next act.
      <p><strong>Lucernae's Lantern:</strong> You reach into the dream and excise a screeching skull, darker than darkness. It hurtles at the monster.</p>
      <p>Reveal hit locations equal to half your blue affinities (rounded down) one at a time. The monster suffers a critical wound at any locations with critical wound effects (Ignore the effects of the trap.) Then reshuffle the hit location deck. Gain +6 Hunt XP.</p>
      `
    },
    {
      name: 'RED FIST',
      descrip: `
      At the start of each showdown, each survivor gains +1 strength token.
      <p>Survivors may spend +1 strength tokens in place of survival.</p>
      `
    },
    {
      name: 'SCHOLAR OF DEATH',
      descrip: `
      On Arrival, gain reroll tokens equal to the number of volumes recorded about your quarry. (e.g., if your settlement has White Lion Volumes 1, 2 and 3, when you fight a White Lion, gain 3 reroll tokens.)
      <p>Discard a reroll token to reroll one of your results during the showdown. This includes monster roll results when you are the monster controller.</p>
      `
    },
    {
      name: 'SWORDMAN\'S PROMISE',
      descrip: `
      On Arrival, gain survival up to your settlement's Survival Limit if you have a sword in your gear grid.
      `
    },
    {
      name: 'SYNCHRONIZED STRIKE',
      descrip: `
      With flawless coordination, you strike as one.
      <p>When you're adjacent to a monster, attack with a melee weapon, and have an Attack Assist. Your attack gains +1 accuracy, +1 strength. Limit, once per round.</p>
      <p><strong>Attack Assist:</strong> A survivor who also has Synchronized Strike and is in the right spot. They are standing adjacent to the monster on its opposite side, and parallel to you.</p>
      `
    },
    {
      name: 'ZERO PRESENCE',
      descrip: `
      Gain +1 strength when attacking a monster from its blind spot.
      <p>Whenever you attack a monster, you are always considered to be in its blind spot.</p>
      `
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetFA();
    this.resetSA();
  }

  chooseFA(chosenFA: string, isSecret: boolean) {
    if (isSecret) {
      this.chosenSecretArt = this.secretFightArts.find(x => x.name === chosenFA);
    } else {
      this.chosenFightingArt = this.fightingArts.find(x => x.name === chosenFA);
    }
  }

  filterSA(searchTerm: string) {
    this.filteredSA = this.secretFightArts.filter(x => x.name.includes(searchTerm.toUpperCase()));
  }

  filterFA(searchTerm: string) {
    this.filteredFA = this.fightingArts.filter(x => x.name.includes(searchTerm.toUpperCase()));
  }

  resetSA() {
    this.filteredSA = this.secretFightArts;
  }

  resetFA() {
    this.filteredFA = this.fightingArts;
  }

}
