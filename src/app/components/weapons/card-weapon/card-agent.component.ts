import {Component, Input} from '@angular/core';
import {IAgent} from '../../../types/agent.interface';
import {IWeapon} from '../../../types/weapon.interface';

@Component({
  selector: 'app-card-weapon',
  templateUrl: './card-weapon.component.html',
  styles: [``]
})
export class CardWeaponComponent {
  @Input() weapon!: IWeapon;
}
