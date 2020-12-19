import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CharactersListComponent} from './components/characters/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
