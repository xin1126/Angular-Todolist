import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUtilsComponent } from './button-utils.component';

describe('ButtonUtilsComponent', () => {
  let component: ButtonUtilsComponent;
  let fixture: ComponentFixture<ButtonUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUtilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
