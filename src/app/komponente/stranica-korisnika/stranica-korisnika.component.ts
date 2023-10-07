import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Korisnik } from 'src/app/modeli/korsinik';
import { Manga } from 'src/app/modeli/manga';
import { DataServisService } from 'src/app/servisi/data-servis.service';

@Component({
  selector: 'stranica-korisnika',
  templateUrl: './stranica-korisnika.component.html',
  styleUrls: ['./stranica-korisnika.component.css']
})

export class StranicaKorisnikaComponent implements OnInit {
  constructor(public dataServis: DataServisService, private router: Router){}

  public korisnici: Korisnik[]
  public mange: Manga[]

  ngOnInit(): void {
    //Prikupi niz korisnika
      this.dataServis.getUsers().subscribe(
        (res) => {        
          this.korisnici = res;
        }
      );
    //Prikupi niz knjiga (samo za ukupan broj)
      this.dataServis.getBooks().subscribe(
        (res) => { 
          this.mange = res;       
        }
      );
  }

  navigacijaNaNovogKorisnika(){
    this.router.navigate(['/novi-korisnik'])
  }

  OtvoriInformacije(id: number){
    this.router.navigate(['/korisnik/' + id])
  }
}
