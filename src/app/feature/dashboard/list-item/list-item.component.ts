import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../shared/models/book.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {

  @Input() item!: Book;
  @Output() markAsDone = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

}
