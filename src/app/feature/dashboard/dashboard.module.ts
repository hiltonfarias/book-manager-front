import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListComponent } from './list/list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { listReducer } from './state/list.reducer';
import { ListEffects } from './state/list.effects';
import { LastBookComponent } from './last-book/last-book.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ]),
    StoreModule.forFeature('list', listReducer),
    EffectsModule.forFeature([ListEffects]),
  ],
  declarations: [
    DashboardComponent,
    ListComponent,
    CreateBookComponent,
    LastBookComponent,
    ListItemComponent,
  ]
})
export class DashboardModule { }
