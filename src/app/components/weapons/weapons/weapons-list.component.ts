import {Component} from '@angular/core';
import {IWeapon} from '../../../types/weapon.interface';
import {WeaponService} from '../../../services/weapon/weapon.service';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styles: [``]
})
export class WeaponsListComponent {
  public list!: IWeapon[];

  constructor(private readonly ws: WeaponService) {
    this.getData();
  }

  private getData(): void {
    this.list = this.ws.getList();
  }

  public addNewWeapon(newWeapon: Partial<IWeapon>): void {
    this.ws.create(newWeapon as IWeapon);
    this.getData();
  }
}
