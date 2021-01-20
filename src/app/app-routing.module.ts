import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'agents',
    loadChildren: () =>
      import('./modules/agent.module').then(m => m.AgentModule)
  },
  {
    path: 'weapons',
    loadChildren: () =>
      import('./modules/weapon.module').then(m => m.WeaponModule)
  },

  { path: '**', pathMatch: 'full', redirectTo: 'agents' },
  { path: '', pathMatch: 'full', redirectTo: 'agents' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
