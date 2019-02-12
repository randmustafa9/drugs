import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments6Component } from './comments6.component';

describe('Comments6Component', () => {
  let component: Comments6Component;
  let fixture: ComponentFixture<Comments6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
