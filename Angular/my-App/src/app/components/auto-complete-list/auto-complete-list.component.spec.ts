import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteListComponent } from './auto-complete-list.component';

describe('AutoCompleteListComponent', () => {
  let component: AutoCompleteListComponent;
  let fixture: ComponentFixture<AutoCompleteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
