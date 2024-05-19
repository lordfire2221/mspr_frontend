import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHttpComponent } from './header-http.component';

describe('HeaderHttpComponent', () => {
  let component: HeaderHttpComponent;
  let fixture: ComponentFixture<HeaderHttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderHttpComponent]
    });
    fixture = TestBed.createComponent(HeaderHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
