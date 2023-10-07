import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Korisnik } from 'src/app/modeli/korsinik';
import { DataServisService } from 'src/app/servisi/data-servis.service';

@Component({
  selector: 'stranica-novi-korisnik',
  templateUrl: './stranica-novi-korisnik.component.html',
  styleUrls: ['./stranica-novi-korisnik.component.css']
})
export class StranicaNoviKorisnikComponent implements  OnInit{
  public korisnik: Korisnik = new Korisnik()

  constructor(private router: Router, private servis: DataServisService){}

  ngOnInit(): void {
    
  }

  public KreirajProfil(){
    this.servis.AddUser(this.korisnik).subscribe()
    this.router.navigate(['/korisnici'])
  }
  
}
