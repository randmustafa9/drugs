import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments5Component } from './comments5.component';

describe('Comments5Component', () => {
  let component: Comments5Component;
  let fixture: ComponentFixture<Comments5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
