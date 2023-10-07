import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaMangiComponent } from './stranica-mangi.component';

describe('StranicaMangiComponent', () => {
  let component: StranicaMangiComponent;
  let fixture: ComponentFixture<StranicaMangiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StranicaMangiComponent]
    });
    fixture = TestBed.createComponent(StranicaMangiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
