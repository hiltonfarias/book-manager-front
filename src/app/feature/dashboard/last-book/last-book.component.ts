import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.reducer';
import { Book } from '../../../shared/models/book.model';
import * as fromListAction from '../state/list.actions';
import * as fromListSelector from '../state/list.selectors';

@Component({
  selector: 'app-last-book',
  templateUrl: './last-book.component.html',
  styleUrls: ['./last-book.component.scss']
})
export class LastBookComponent implements OnInit {

  list$!: Observable<Book[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(fromListAction.loadListFromLastBooks());

    this.list$ = this.store
    .pipe(
      select(fromListSelector.selectListEntities),
      map(entities => entities.slice(0, 10)),
    );
    this.loading$ = this.store.pipe(select(fromListSelector.selectListLoading));
  }

  markAsDone(id: number) {}

}
