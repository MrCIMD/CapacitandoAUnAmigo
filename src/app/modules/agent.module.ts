import {NgModule} from '@angular/core';

import {CharactersListComponent} from '../components/agents/characters/characters-list.component';
import {CreateAgentComponent} from '../components/agents/create-agent/create-agent.component';
import {CardAgentComponent} from '../components/agents/card-agent/card-agent.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AgentRoutingModule} from './agent-routing.module';

@NgModule({
  declarations: [
    CharactersListComponent,
    CreateAgentComponent,
    CardAgentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgentRoutingModule
  ]
})
export class AgentModule {}
