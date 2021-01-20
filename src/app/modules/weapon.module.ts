import {NgModule} from '@angular/core';
import {WeaponsListComponent} from '../components/weapons/weapons/weapons-list.component';
import {CreateWeaponComponent} from '../components/weapons/create-weapon/create-weapon.component';
import {CardWeaponComponent} from '../components/weapons/card-weapon/card-agent.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WeaponRoutingModule} from './weapon-routing.module';

@NgModule({
  declarations: [
    WeaponsListComponent,
    CreateWeaponComponent,
    CardWeaponComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeaponRoutingModule
  ]
})
export class WeaponModule {}
