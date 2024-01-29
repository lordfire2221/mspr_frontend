import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlePasswordComponent } from './controle-password.component';

describe('ControlePasswordComponent', () => {
  let component: ControlePasswordComponent;
  let fixture: ComponentFixture<ControlePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlePasswordComponent]
    });
    fixture = TestBed.createComponent(ControlePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
