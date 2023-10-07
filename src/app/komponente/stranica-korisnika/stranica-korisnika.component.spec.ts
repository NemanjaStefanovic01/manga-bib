import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaKorisnikaComponent } from './stranica-korisnika.component';

describe('StranicaKorisnikaComponent', () => {
  let component: StranicaKorisnikaComponent;
  let fixture: ComponentFixture<StranicaKorisnikaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StranicaKorisnikaComponent]
    });
    fixture = TestBed.createComponent(StranicaKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
