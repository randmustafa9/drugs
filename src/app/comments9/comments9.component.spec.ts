import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments9Component } from './comments9.component';

describe('Comments9Component', () => {
  let component: Comments9Component;
  let fixture: ComponentFixture<Comments9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
