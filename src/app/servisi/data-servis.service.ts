import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { catchError, throwError } from 'rxjs';

import { Korisnik } from '../modeli/korsinik';
import { Manga } from '../modeli/manga';
import { MangaKopija } from '../modeli/manga-kopija';

@Injectable({
  providedIn: 'root'
})
export class DataServisService {
  public tenant = "marko-cupara";
  public baseUrl: string = "https://vebdizajneducons.info/";
  public tenantHeader={headers: new HttpHeaders({"tenant": this.tenant})};

  public korsinici: Korisnik[] = [];
  // public korisnik: Korisnik;
  public mange: Manga[] = [];
  public kopijeMangi: MangaKopija[] = [];

  constructor(public httpClient: HttpClient) { }

  //Get Funkcije
  public getUsers(): Observable<Korisnik[]> {
    return this.httpClient.get<Korisnik[]>(this.baseUrl + "users", this.tenantHeader).pipe(
      map((res)=>
      {
        this.korsinici = res;
        return res;
      }));
  }
  public getUserByID(id: number): Observable<Korisnik> {
  
    return this.httpClient.get<Korisnik>(this.baseUrl + "get-user/" + id, this.tenantHeader).pipe(
      map(
        (res) => {
          
          var existingUserIndex = (this.korsinici != null) ? this.korsinici.findIndex(f => f.id == id) : -1;
          if (existingUserIndex >= 0) {
            this.korsinici.splice(existingUserIndex, 1, res);
          }
          else {
            if (this.korsinici == null)
              this.korsinici = [];
            this.korsinici.push(res);
          }
          
          return res;
        }
      ), catchError((err) => {
        console.log("Korisnik ne postoji");
        return throwError(err);  
      })
    )
  }

  //mange
  public getBooks(): Observable<Manga[]> {
    return this.httpClient.get<Manga[]>(this.baseUrl + "books", this.tenantHeader).pipe(
      map((res)=>
      {
        this.mange = res;
        return res;
      }));
  }
  public getBookCopies(): Observable<MangaKopija[]> {
    return this.httpClient.get<MangaKopija[]>(this.baseUrl + "book-copies", this.tenantHeader).pipe(
      map((res)=>
      {
        this.kopijeMangi = res;
        return res;
      }));
  
  }
  public bookCopyToBook(id) {
    return this.mange.find(b=>b.id==id);
  } 
  public getAvailableBookCopies(): Observable<MangaKopija[]>{
    return this.httpClient.get<MangaKopija[]>(this.baseUrl + "available-book-copies", this.tenantHeader).pipe(
      map((res)=>
      {
        this.kopijeMangi = res;
        return res;
      }));
  }
  //Post Funkcije
  public AddUser(korsinik: Korisnik): Observable<Korisnik>{
    return this.httpClient.post<Korisnik>(this.baseUrl + "add-user", korsinik, this.tenantHeader).pipe(
      map(
        (res) => {
          return res;
        }
      ), catchError((err) => {
        console.log("Korsinik nije sacuvan")
        return throwError(err);
      })
    )
  }
  public SaveUser(korisnik: Korisnik): Observable<Korisnik>{
    return this.httpClient.post<Korisnik>(this.baseUrl + "edit-user", korisnik, this.tenantHeader).pipe(
      map(
        (res) => {
          return res;
        }
      ), catchError((err) => {
        console.log("Cuvanje nije uspelo!")
        return throwError(err);
      })
    )
  }
  public AddBook(book: Manga): Observable<Manga>{
    return this.httpClient.post<Manga>(this.baseUrl+"add-book", book, this.tenantHeader).pipe(
      map(
        (res) => {
          return res;
        }
      ), catchError((err) => {
        console.log("cuvanje nije uspelo!")
        return throwError(err);
      })
    )
  }
  public rentBook(userID: number, bookID:number): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + "rent-book/" + userID + "/"+bookID, {}, this.tenantHeader).pipe(
      map(
        (res)=>{
          return res;
          
        }
      ), catchError((err) => {
        console.log("Nije uspelo!")
        return throwError(err);
      }
    )
    )
  }
  public returnBook(userID: number, bookID: number): Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + "return-book/" + userID + "/" + bookID, {}, this.tenantHeader).pipe(
      map(
        (res)=>{
          console.log("vracanje je uspelo!")
          return res;
          
        }
      ), catchError((err) => {
        console.log("vracanje nije uspelo!")
        return throwError(err);
      }
    )
    )
  }
  
  //Delete Funkcije
  public DeleteUser(id: number): Observable<Korisnik>{
    return this.httpClient.delete<Korisnik>(this.baseUrl + "delete-user/" + id, this.tenantHeader).pipe(
      map(
        (res)=>{
          return res;
        }
      ), catchError((err) => {
        console.log("Brisanje nije uspelo!")
        return throwError(err);
      }
    )
    )
  }
  public DeleteBook(id: number): Observable<Manga>{
    return this.httpClient.delete<Manga>(this.baseUrl + "delete-book/" + id, this.tenantHeader).pipe(
      map(
        (res)=>{
          return res;
        }
      ), catchError((err) => {
        console.log("Brisanje nije uspelo!")
        return throwError(err);
      }
    )
    )
  }
}
