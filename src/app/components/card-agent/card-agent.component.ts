import {Component, Input} from '@angular/core';
import {IAgent} from '../../types/agent.interface';

@Component({
  selector: 'app-card-agent',
  templateUrl: './card-agent.component.html',
  styles: [``]
})
export class CardAgentComponent {
  @Input() agent!: IAgent;
}
