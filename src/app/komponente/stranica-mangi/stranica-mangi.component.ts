import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/modeli/korsinik';
import { Manga } from 'src/app/modeli/manga';
import { MangaKopija } from 'src/app/modeli/manga-kopija';
import { DataServisService } from 'src/app/servisi/data-servis.service';

@Component({
  selector: 'stranica-mangi',
  templateUrl: './stranica-mangi.component.html',
  styleUrls: ['./stranica-mangi.component.css'],
})
export class StranicaMangiComponent implements OnInit{
  constructor(public dataService: DataServisService){} 

  public sveMange: Manga[] = []
  public slobodneMange: Manga[] = []
  public kopijeMangi: MangaKopija[] = []
  public slobodneKopijeMangi: MangaKopija[] = []

  public manga: Manga = new Manga()

  public kreiranjeNoveMange: boolean = false

  public korisnici: Korisnik[] = []
  public odabraniKorisnik: Korisnik

  public imeKorisnika: string = ''
  public postojeciKorisnik: boolean = false
  public prikaziGresku: boolean = false

  ngOnInit(): void {
    this.dataService.getAvailableBookCopies().subscribe(
      (res) => {
        this.slobodneKopijeMangi = res

        this.dataService.getBooks().subscribe(
          (res)=>{
            this.sveMange = res
            
            this.slobodneKopijeMangi.forEach(slob => {
              this.slobodneMange.push(this.dataService.bookCopyToBook(slob.bookID))
            });
          }
        )
      }
    )
    this.dataService.getUsers().subscribe(
      (res) => {
        this.korisnici = res
      }
    )
  }

  BtnNovaManga(){
    this.kreiranjeNoveMange = true
  }
  BtnObrisiMangu(manga: Manga){
    this.dataService.DeleteBook(manga.id).subscribe(
      (res) => {
        location.reload()
      }
      )
  }
  BtnIznajmiMangu(manga: Manga){
    this.dataService.rentBook(this.odabraniKorisnik.id, manga.id).subscribe(
      (res) => {
        location.reload()
      }
    )
    alert("Korisnik " + this.odabraniKorisnik.firstName + " je uspesno iznajmio mangu: " + manga.title)
  }
  
  KreirajMangu(){
    this.dataService.AddBook(this.manga).subscribe(
      (res) => {
        location.reload()
      }
    )

    this.kreiranjeNoveMange = false
  }

  ProveriKorisnika(){
    var imePrezime: string[] = this.imeKorisnika.split(' ')
    console.log(imePrezime)
    this.postojeciKorisnik = false

    this.korisnici.forEach(korisnik => {
      if(imePrezime[0] == korisnik.firstName && imePrezime[1] == korisnik.lastName){
        this.odabraniKorisnik = korisnik
        this.postojeciKorisnik = true
        this.prikaziGresku = false
        console.log("Pronadjen postojeci korisnik i stavi ga na true")
      }
    });
    if(this.postojeciKorisnik == false){
      this.prikaziGresku = true
    }
  }
}
