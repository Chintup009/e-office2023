import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users5Component } from './users5.component';

describe('Users5Component', () => {
  let component: Users5Component;
  let fixture: ComponentFixture<Users5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Users5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Users5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
