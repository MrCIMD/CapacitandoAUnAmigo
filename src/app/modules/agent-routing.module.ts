import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersListComponent} from '../components/agents/characters/characters-list.component';

const routes: Routes = [
  { path: '', component: CharactersListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AgentRoutingModule {}
