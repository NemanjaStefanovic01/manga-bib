import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StranicaKorisnikaComponent } from './komponente/stranica-korisnika/stranica-korisnika.component'
import { StranicaMangiComponent } from './komponente/stranica-mangi/stranica-mangi.component';
import { StranicaNoviKorisnikComponent } from './komponente/stranica-novi-korisnik/stranica-novi-korisnik.component';
import { StranicaProfilKorisnikaComponent } from './komponente/stranica-profil-korisnika/stranica-profil-korisnika.component';


const routes: Routes = [
  { path: '', redirectTo: '/korisnici', pathMatch: 'full' },
  {path: 'korisnici', component: StranicaKorisnikaComponent},
  {path: 'mange', component: StranicaMangiComponent},
  {path: 'novi-korisnik', component: StranicaNoviKorisnikComponent},
  {path: 'korisnik/:id', component: StranicaProfilKorisnikaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
