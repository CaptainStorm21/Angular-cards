import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForCardComponent } from './ng-for-card.component';

describe('NgForCardComponent', () => {
  let component: NgForCardComponent;
  let fixture: ComponentFixture<NgForCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
