import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaNoviKorisnikComponent } from './stranica-novi-korisnik.component';

describe('StranicaNoviKorisnikComponent', () => {
  let component: StranicaNoviKorisnikComponent;
  let fixture: ComponentFixture<StranicaNoviKorisnikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StranicaNoviKorisnikComponent]
    });
    fixture = TestBed.createComponent(StranicaNoviKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
