import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CharactersListComponent} from './components/agents/characters/characters-list.component';
import {CreateAgentComponent} from './components/agents/create-agent/create-agent.component';
import {CardAgentComponent} from './components/agents/card-agent/card-agent.component';
import {WeaponsListComponent} from './components/weapons/weapons/weapons-list.component';
import {CreateWeaponComponent} from './components/weapons/create-weapon/create-weapon.component';
import {CardWeaponComponent} from './components/weapons/card-weapon/card-agent.component';
import {WeaponService} from './services/weapon/weapon.service';

@NgModule({
  declarations: [
    AppComponent,
    // Agents components
    CharactersListComponent,
    CreateAgentComponent,
    CardAgentComponent,
    // Weapons Components
    WeaponsListComponent,
    CreateWeaponComponent,
    CardWeaponComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    WeaponService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
