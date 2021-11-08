import { Book } from './../../../shared/models/book.model';
import { createReducer, Action, on } from '@ngrx/store';

import * as fromListActions from './list.actions';

export interface ListState {
  entities: Book[];
  loading: boolean;
  loadingMore: boolean;
  error: boolean;
  page: number;
  creating: boolean;
  removing: boolean;
}

export const listInitialState: ListState = {
  entities: [],
  loading: false,
  loadingMore: false,
  error: false,
  page: 0,
  creating: false,
  removing: false,
};

export const reducer = createReducer(
  listInitialState,
  on(
    fromListActions.loadListFromLastBooks,
    fromListActions.loadListFromList,
    state => ({
      ...state,
      loading: true,
      error: false,
      page: 0,
    }),
  ),
  on(fromListActions.loadMore, state => ({
    ...state,
    loadingMore: true,
    page: state.page + 1,
  })),
  on(fromListActions.notifyHydrated, state => ({
    ...state,
    loading: false,
  })),
  on(fromListActions.loadListSuccess, (state, { entities }) => ({
    ...state,
    entities: [...state.entities, ...entities],
    loading: false,
    loadingMore: false,
  })),
  on(fromListActions.loadListFailure, state => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(fromListActions.createBook, state => ({
    ...state,
    creating: true,
  })),
  on(fromListActions.createBookSuccess, (state, { book }) => ({
    ...state,
    entities: [book, ...state.entities],
    creating: false,
  })),
  on(fromListActions.createBookFailure, state => ({
    ...state,
    creating: false,
  })),
  on(fromListActions.removeBook, state => ({
    ...state,
    removing: true,
  })),
  on(fromListActions.removeBookSuccess, (state, { id }) => ({
    ...state,
    entities: state.entities.filter(item => item.id !== id),
    removing: false,
  })),
  on(fromListActions.removeBookFailure, state => ({
    ...state,
    removing: false,
  })),
);

export function listReducer(state: ListState | undefined, action: Action): ListState {
  return reducer(state, action);
}
