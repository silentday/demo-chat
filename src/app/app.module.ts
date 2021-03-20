import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { ChatComponent } from "./chat/chat.component";
import { DataService } from "./data.service";
import { DB } from "./db.service";


import { NgAisModule } from 'angular-instantsearch';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

import { ChatNameSearchComponent } from './chat-name-search/chat-name-search.component';
@NgModule({
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [DataService, DB],
  declarations: [AppComponent, ChatComponent, ChatNameSearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
