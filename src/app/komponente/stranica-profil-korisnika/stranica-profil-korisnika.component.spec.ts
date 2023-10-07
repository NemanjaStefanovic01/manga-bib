import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaProfilKorisnikaComponent } from './stranica-profil-korisnika.component';

describe('StranicaProfilKorisnikaComponent', () => {
  let component: StranicaProfilKorisnikaComponent;
  let fixture: ComponentFixture<StranicaProfilKorisnikaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StranicaProfilKorisnikaComponent]
    });
    fixture = TestBed.createComponent(StranicaProfilKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
