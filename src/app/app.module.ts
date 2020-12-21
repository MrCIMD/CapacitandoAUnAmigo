import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CharactersListComponent} from './components/characters/characters-list.component';
import {CreateAgentComponent} from './components/create-agent/create-agent.component';
import {CardAgentComponent} from './components/card-agent/card-agent.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CreateAgentComponent,
    CardAgentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
