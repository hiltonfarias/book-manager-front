import { Book } from "src/app/shared/models/book.model";

export function getEntities() {
  return _entities;
}

export function setEntities(entities: Book[]) {
  _entities = entities;
}

let _entities: Book[] = [
  {
    id: 1,
    author: '------Martin, Robert C. and Coplien, James O.',
    title: '-------Clean code IIII: a handbook of agile software craftsmanship',
    publisher: 'Prentice Hall',
    language: 'ingles',
    commonCover: '1500',
    isbn: '0000132350884 3333350882',
    year: '2010',
},
{
    id: 3,
    author: 'Martin, Robert C. and Coplien, James O.',
    title: 'Clean code: a handbook of agile software craftsmanship',
    publisher: 'Prentice Hall',
    language: 'ingles',
    commonCover: '700',
    isbn: '7777132350884 3333352222',
    year: '2013',
},
{
  id: 4,
  author: 'Martin, Robert C. and Coplien, James O.',
  title: 'Clean code: a handbook of agile software craftsmanship',
  publisher: 'Prentice Hall',
  language: 'ingles',
  commonCover: '700',
  isbn: '7777132350884 3333352222',
  year: '2013',
},
{
    id: 6,
    author: '------Martin, Robert C. and Coplien, James O.',
    title: '------Clean code---------: a handbook of agile software craftsmanship',
    publisher: 'Prentice Hall',
    language: 'ingles',
    commonCover: '700',
    isbn: '7777132350884 3333352222',
    year: '2013',
}
];
