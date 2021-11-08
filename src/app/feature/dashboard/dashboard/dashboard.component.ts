import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import * as fromAppSelectors  from '../../../state/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  name$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.name$ = this.store.pipe(select(fromAppSelectors.selectUserName));
  }

  // ngOnInit(): void {
  // }
}
