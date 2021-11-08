import { Injectable } from "@angular/core";

import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

import { Book } from "../models/book.model";
import { getEntities, setEntities } from '../../../assets/db';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BookService {

  private readonly baseUrl = 'http://localhost:8080/api/v1/books';

  books!: Book[];
  book!: Book; //= { id:0 ,author:'', title:'', publisher:'', language:'',commonCover:'',isbn:'', year:''};
  constructor(private httpClient: HttpClient, private router: Router) {}

  getList(): Observable<any> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}`);
  }

  // const start = page * 10;
  // return of(getEntities().slice(start, start + 10))
  //   .pipe(); //.pipe(delay(2000))

  // toggleDone(id: number): Observable<Book> {
  //   let book: Book;
  //   getEntities().forEach(item => {
  //     if (item.id === id) {
  //       book = item;
  //       item.done = !item.done;
  //     }
  //   });
  //   return !!book ? of(book).pipe(delay(2000)) : throwError(`Book com id: ${ id } não existe.`);
  // }

  create(book: Partial<Book>): Observable<Book> {

    const entity: Book = {
      id: 0,
      author: '',
      title: '',
      publisher: '',
      language: '',
      commonCover: '',
      isbn: '',
      year: '',
    }
    // setEntities([entity, ...getEntities()]);
    // return of(entity)
    //   .pipe(delay(2000));
    return this.httpClient.post<Book>(`${this.baseUrl}`,book);
  }

  remove(id: number): Observable<boolean | never> {
    const length = getEntities().length;
    const filtered = getEntities().filter(item => item.id !== id);
    setEntities(filtered);
    return of('')
      .pipe(
        delay(2000),
        mergeMap(() => filtered.length === length ?
          throwError(`Book com id: ${ id } não existe.`)
          : of(true),
        ),
      );
  }
}
