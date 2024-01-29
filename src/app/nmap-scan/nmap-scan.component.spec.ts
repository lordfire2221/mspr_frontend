import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmapScanComponent } from './nmap-scan.component';

describe('NmapScanComponent', () => {
  let component: NmapScanComponent;
  let fixture: ComponentFixture<NmapScanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NmapScanComponent]
    });
    fixture = TestBed.createComponent(NmapScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
