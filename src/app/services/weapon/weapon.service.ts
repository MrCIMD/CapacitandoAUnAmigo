import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {IWeapon} from '../../types/weapon.interface';

@Injectable()
export class WeaponService extends BaseService<IWeapon> {
  constructor() {
    super('listWeapons');
  }
}
