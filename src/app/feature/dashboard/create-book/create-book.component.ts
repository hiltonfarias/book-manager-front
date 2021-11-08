import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { pairwise, takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.reducer';

import * as fromListActions from '../state/list.actions';
import * as fromListSelectors from '../state/list.selectors';
import { Book } from '../../../shared/models/book.model';
import { User } from '../../../shared/models/user.model';
import { Client } from 'src/app/shared/models/client.model';
import { BookDTO } from '../../../shared/models/bookDTO.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements  OnDestroy {

  form = new FormGroup({
    authorControl : new FormControl(''),
    titleControl : new FormControl(''),
    publisherControl : new FormControl(''),
    languageControl : new FormControl(''),
    commonCoverControl : new FormControl(''),
    isbnControl : new FormControl(''),
    yearControl : new FormControl(''),
    loginControl : new FormControl(''),
    passwordControl : new FormControl(''),
    fullNameControl : new FormControl(''),
    emailControl : new FormControl(''),
    birthDateControl : new FormControl(''),
    activeControl : new FormControl('')
  });

  creating$!: Observable<BookDTO>;

  client!: Client;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store<AppState>) {
    // this.client.login = 'hilton';
    // this.client.password = '$2a$10$d3r71jSFOUT67CvBndNwtONvamAPauDbK4DWkEasp.4Wb8GtSDy7S';
    // this.client.fullName = 'Hilton Farias da Silva';
    // this.client.email = 'hilton@email.com';
    // this.client.birthDate = '1988-01-01';

  }

  // ngOnInit() {

  //   // this.creating$ = this.store.pipe(select(fromListSelectors.selectListCreating));

  //   // this.creating$
  //   //   .pipe(
  //   //     pairwise(),
  //   //     takeUntil(this.componentDestroyed$),
  //   //   )
  //   //   .subscribe(([oldCreating, creating]) => {
  //   //     if (oldCreating && !creating) {
  //   //       this.form.setValue();
  //   //     }
  //   //   });
  // }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  save() {
    this.store.dispatch(fromListActions.createBook( this.form.value ));
  }
}
