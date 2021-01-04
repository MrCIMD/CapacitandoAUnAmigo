import {Component} from '@angular/core';
import {IAgent} from '../../../types/agent.interface';
import {IWeapon} from '../../../types/weapon.interface';

@Component({
  selector: 'app-weapons-list',
  templateUrl: './weapons-list.component.html',
  styles: [``]
})
export class WeaponsListComponent {
  public list: IWeapon[] = [
    {
      name: 'Operator (fusil de francotirador)',
      photo: 'https://as01.epimg.net/meristation/imagenes/2020/06/04/guia_pagina/1591290227_065374_1591290574_sumario_normal.jpg',
      description: 'Este fusil de francotirador es actualmente la mejor arma de Valorant, ya que hace mucho daño a los enemigos independientemente del lugar en el que les alcancemos. Incluso si le damos en las piernas y llevan escudos, se quedarán a un toque y bastará otro disparo para poner fin a sus vidas. Aun así, el problema es que debemos atacar desde la distancia y nuestra visión es limitada, por lo que antes de usarla deberemos dominar los puntos estratégicos de cada mapa para colocarnos correctamente.',
      damageHead: 255,
      damageBody: 150,
      damageLegs: 127
    },
  ];

  constructor() {
  }

  public addNewWeapon(newWeapon: Partial<IWeapon>): void {
    this.list.push(newWeapon as IWeapon);
  }
}
