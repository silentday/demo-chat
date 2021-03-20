import { Component, Inject, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectAutocomplete } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './chat-name-search.component.html',
  styleUrls: ['./chat-name-search.component.css']
})
export class ChatNameSearchComponent extends BaseWidget {
  state: {
    query: string;
    refine: Function;
    indices: object[];
  };

  @Output() onQuerySuggestionClick = new EventEmitter<{ query: string }>();

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent
  ) {
    super('AutocompleteComponent');
  }

  public handleChange($event: KeyboardEvent) {
    this.state.refine(($event.target as HTMLInputElement).value);
  }

  public ngOnInit() {
    this.createWidget(connectAutocomplete, {});
    super.ngOnInit();
  }

  isSearchOpen(event: Event, trigger: MatAutocompleteTrigger)  {
    event.stopPropagation();
    const activateRegEx = new RegExp('/@/')
    if (activateRegEx.test(((event.target) as HTMLInputElement).value)){
      trigger.openPanel();
    }
  }
}
