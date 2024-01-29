import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifPasswordComponent } from './verif-password.component';

describe('VerifPasswordComponent', () => {
  let component: VerifPasswordComponent;
  let fixture: ComponentFixture<VerifPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifPasswordComponent]
    });
    fixture = TestBed.createComponent(VerifPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
