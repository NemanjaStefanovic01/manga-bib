import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StranicaKorisnikaComponent } from './komponente/stranica-korisnika/stranica-korisnika.component';
import { StranicaMangiComponent } from './komponente/stranica-mangi/stranica-mangi.component';
import { StranicaNoviKorisnikComponent } from './komponente/stranica-novi-korisnik/stranica-novi-korisnik.component';
import { StranicaProfilKorisnikaComponent } from './komponente/stranica-profil-korisnika/stranica-profil-korisnika.component';

@NgModule({
  declarations: [
    AppComponent,
    StranicaKorisnikaComponent,
    StranicaMangiComponent,
    StranicaNoviKorisnikComponent,
    StranicaProfilKorisnikaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
