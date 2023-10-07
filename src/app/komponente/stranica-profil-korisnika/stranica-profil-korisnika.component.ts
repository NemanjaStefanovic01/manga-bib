import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataServisService } from 'src/app/servisi/data-servis.service';

import { Korisnik } from 'src/app/modeli/korsinik';
import { Manga } from 'src/app/modeli/manga';
import { MangaKopija } from 'src/app/modeli/manga-kopija';

@Component({
  selector: 'app-stranica-profil-korisnika',
  templateUrl: './stranica-profil-korisnika.component.html',
  styleUrls: ['./stranica-profil-korisnika.component.css']
})
export class StranicaProfilKorisnikaComponent {

  public korisnik: Korisnik = new Korisnik
  public korisnikoveMange: Manga[] = []

  public id: number


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public dataService: DataServisService) 
              {}

  ngOnInit(): void {

    //Izvuci korsinika iz url
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = parseInt(params["id"]);

        if (this.dataService.korsinici != null)
          this.korisnik = this.dataService.korsinici.find(u => u.id == this.id);
        if (this.korisnik == null)
          this.dataService.getUserByID(this.id).subscribe(
            (res) => {
              this.korisnik = res; 
            }
          );
      }
    )

    //Pridobi Korisnikove iznajmljene mange
    this.dataService.getBooks().subscribe(
      (res) => {
        this.korisnik.rentedBooks.forEach(rentovanaManga => {
          this.korisnikoveMange.push(this.dataService.bookCopyToBook(rentovanaManga.bookID))
        });
      }
    )
  }

  //Funkcije za dugmice
  SacuvajIzmene(){
    this.dataService.SaveUser(this.korisnik).subscribe(
      (res) => {
        alert("Izmene za korisnika: " + this.korisnik.firstName + "su sacuvane!")
        location.reload()
      }
    )
  }
  ObrisiKorisnika(){
    this.dataService.DeleteUser(this.korisnik.id).subscribe(
      (res) =>{
        this.router.navigate(['/korisnici'])
      }
    )
  }
  PromeniAktivnostKorisnika(){
    if(this.korisnik.active){
      this.korisnik.active = false
    }else{
      this.korisnik.active = true
    }
  }
  IznajmiBtn(){
    this.router.navigate(['/mange'])
  }

  VratiMangu(bookID: number){
    console.log(this.korisnik.id)
    console.log(bookID)
    this.dataService.returnBook(this.korisnik.id, bookID).subscribe()
    alert("Korisnik " + this.korisnik.firstName + " je uspesno vratio mangu")
    location.reload()
  }
}
