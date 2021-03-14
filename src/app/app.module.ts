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
import { ChatNameSearchDirective } from './chatNameSearch/chat-name-search.directive';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, NgAisModule.forRoot()],
  providers: [DataService, DB],
  declarations: [AppComponent, ChatComponent, ChatNameSearchDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
