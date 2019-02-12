import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments8Component } from './comments8.component';

describe('Comments8Component', () => {
  let component: Comments8Component;
  let fixture: ComponentFixture<Comments8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comments8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comments8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
