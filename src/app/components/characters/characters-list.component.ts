import {Component} from '@angular/core';
import {IAgent} from '../../types/agent.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styles: [``]
})
export class CharactersListComponent {
  public openCreateModal: boolean;
  public list: IAgent[] = [
    {
      name: 'Breach',
      age: 55,
      photo: 'https://tiermaker.com/images/chart/chart/all-valorant-agents-386823/breachpng.png',
      description: 'Como ocurre con los iniciadores, Breach es un buen personaje si lo que buscas es defender a tus compañeros y preparar el terreno para dar la bienvenida al equipo enemigo. Cuanto más conozcas los mapas y más entiendas sus habilidades, mejor te desenvolverás con este agente.',
      nationality: 'Suecia',
      class: 'Iniciador'
    },
  ];

  constructor() {
    this.openCreateModal = false;
  }

}
