import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments7Component } from './comments7.component';

describe('Comments7Component', () => {
  let component: Comments7Component;
  let fixture: ComponentFixture<Comments7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
