import {Injectable} from '@angular/core';
import {IWeapon} from '../../types/weapon.interface';

@Injectable()
export class WeaponService {
  public create(weapon: IWeapon): IWeapon {
    const list = this.getList();
    list.unshift(weapon);
    this.saveData(list);
    return weapon;
  }

  public getList(): IWeapon[] {
    const list: string | null = localStorage.getItem('listWeapons');
    return list ? JSON.parse(list) : [];
  }

  public update(name: string, weapon: IWeapon): IWeapon {
    const list = this.getList();
    const index = list.findIndex( (w: IWeapon) => w.name === name );
    list.splice(index, 1, weapon);
    this.saveData(list);
    return weapon;
  }

  public delete(name: string): IWeapon {
    const list = this.getList();
    const index = list.findIndex( (w: IWeapon) => w.name === name );
    const weapon = list.find( (w: IWeapon) => w.name === name );
    list.splice(index, 1);
    this.saveData(list);
    return weapon ? weapon : {} as IWeapon;
  }

  private saveData(weapon: IWeapon[]): boolean {
    if (weapon.length > 0) {
      localStorage.setItem('listWeapons', JSON.stringify(weapon));
      return true;
    }
    return false;
  }
}
