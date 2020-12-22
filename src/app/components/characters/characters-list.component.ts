import {Component} from '@angular/core';
import {IAgent} from '../../types/agent.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styles: [``]
})
export class CharactersListComponent {
  public list: IAgent[] = [
    {
      name: 'Breach',
      age: 55,
      photo: 'https://tiermaker.com/images/chart/chart/all-valorant-agents-386823/breachpng.png',
      description: 'Como ocurre con los iniciadores, Breach es un buen personaje si lo que buscas es defender a tus compañeros y preparar el terreno para dar la bienvenida al equipo enemigo. Cuanto más conozcas los mapas y más entiendas sus habilidades, mejor te desenvolverás con este agente.',
      nationality: 'Suecia',
      class: 'Iniciador'
    },
    {
      name: 'Omen',
      photo: 'https://tiermaker.com/images/chart/chart/all-valorant-agents-386823/omen-avatarjpg.png',
      nationality: 'Desconocida',
      class: 'Controlador',
      description: 'Omen, cazador de las sombras, rondador solitario del infinito. personaje bastante ofensivo con el que hay que tener mucho cuidado si se encuentra en el campo de batalla, cuida siempre tus espaldas.',
    }
  ];

  constructor() {
  }

  public addNewAgent(newAgent: Partial<IAgent>): void {
    this.list.push(newAgent as IAgent);
  }
}
