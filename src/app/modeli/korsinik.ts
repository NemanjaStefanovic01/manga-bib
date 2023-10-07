import { MangaKopija } from "./manga-kopija";

export class Korisnik
{
    public id: number;
    public firstName: string;
    public lastName: string; 
    public createdDate: Date;
    public active: boolean;
    public avatarURL: string;

    public rentedBooks: MangaKopija[];
}