import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { BookService } from "src/app/shared/services/book.service";
import { AppState } from 'src/app/state/app.reducer';
import * as fromListActions from './list.actions';
import * as fromListSelectors from './list.selectors';

@Injectable()
export class ListEffects {

  loadList$ = createEffect(() => this.actions$
    .pipe(
      ofType(
        fromListActions.loadListFromLastBooks,
        fromListActions.loadListFromList,
        fromListActions.loadMore,
      ),
      withLatestFrom(
        this.store.pipe(select(fromListSelectors.selectListEntities)),
        this.store.pipe(select(fromListSelectors.selectListPage)),
      ),
      mergeMap(([, entities, page]) => {
        if (page === 0 && entities.length >= 10) {
          return of(fromListActions.notifyHydrated());
        }
        return this.bookService.getList()
          .pipe(
            map(entities => fromListActions.loadListSuccess({ entities })),
            catchError(() => of(fromListActions.loadListFailure())),
          );
      }),
    ),
  );

  createBook$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromListActions.createBook),
      mergeMap(prop => this.bookService.create(prop)
        .pipe(
          map(book => fromListActions.createBookSuccess({ book })),
          catchError(() => of(fromListActions.createBookFailure())),
        ),
      ),
    ),
  );

  removeBook$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromListActions.removeBook),
      mergeMap(({ id }) => this.bookService.remove(id)
        .pipe(
          map(() => fromListActions.removeBookSuccess({ id })),
          catchError(() => of(fromListActions.removeBookFailure())),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private bookService: BookService) {
  }
}
