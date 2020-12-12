import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndDisplayComponent } from './search-and-display.component';

describe('SearchAndDisplayComponent', () => {
  let component: SearchAndDisplayComponent;
  let fixture: ComponentFixture<SearchAndDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
