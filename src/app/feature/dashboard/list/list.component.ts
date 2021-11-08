import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../state/app.reducer';
import { map } from 'rxjs/operators';
import * as fromListAction from '../state/list.actions';
import * as fromListSelectors from '../state/list.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$!: Observable<Book[]>;
  loading$!: Observable<boolean>;
  loadingMore$!: Observable<boolean>;

  shouldShowLoadingIndicator$!: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(){
    this.store.dispatch(fromListAction.loadListFromList());
    this.list$ = this.store.pipe(select(fromListSelectors.selectListEntities));
    this.loading$ = this.store.pipe(select(fromListSelectors.selectListLoading));
    this.loadingMore$ = this.store.pipe(select(fromListSelectors.selectListLoadingMore));

    this.shouldShowLoadingIndicator$ = combineLatest([
        this.loading$,
        this.loadingMore$
      ])
      .pipe(
        map(([loading, loadingMore]) => loading || loadingMore),
      );
  }
  markAsDone(id: number) {}

  onDelete(id: number) {
    this.store.dispatch(fromListAction.removeBook({ id }));
  }

  loadMore() {
    this.store.dispatch(fromListAction.loadMore());
  }

}
