import { Book } from './book.model';
import { Client } from './client.model';
export interface BookDTO {
  book: Book;
  client: Client;
}
