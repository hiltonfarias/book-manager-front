import { Book } from './../../../shared/models/book.model';
import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/shared/models/client.model';
import { BookDTO } from '../../../shared/models/bookDTO.model';

export const loadListFromLastBooks = createAction(
  '[Last Book] Load List',
);

export const loadListFromList = createAction(
  '[List] Load List',
);

export const loadMore = createAction(
  '[List] Load More',
);

export const notifyHydrated = createAction(
  '[List Effects] Notify Hydrated',
);

export const loadListSuccess = createAction(
  '[API] Load List Success',
  props<{ entities: Book[] }>(),
);

export const loadListFailure = createAction(
  '[API] Load List Failure',
);

export const createBook = createAction(
  '[Crete Book] Create',
  props<{
    author: string,
    title: string,
    publisher: string,
    language: string,
    commonCover: string,
    isbn: string,
    year: string,
    login: string;
    password: string;
    fullName: string;
    email: string;
    birthDate: string;
    active: boolean;
  }>(),
);


export const createBookSuccess = createAction(
  '[API] Create Book Success',
  props<{ book: Book }>(),
);

export const createBookFailure = createAction(
  '[API] Create Book Failure',
);

export const removeBook = createAction(
  '[List] Remove Book',
  props<{ id: number }>(),
);

export const removeBookSuccess = createAction(
  '[List] Remove Book Success',
  props<{ id: number }>(),
);

export const removeBookFailure = createAction(
  '[List] Remove Book Failure',
);
