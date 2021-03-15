import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNameSearchComponent } from './chat-name-search.component';

describe('ChatNameSearchComponent', () => {
  let component: ChatNameSearchComponent;
  let fixture: ComponentFixture<ChatNameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNameSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
