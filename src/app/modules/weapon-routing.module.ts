import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeaponsListComponent} from '../components/weapons/weapons/weapons-list.component';

const routes: Routes = [
  { path: '', component: WeaponsListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WeaponRoutingModule {}
