import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const TODO_DEFAULTS = [
  {
    id: 1,
    title: 'Hello',
    text: 'Hello world!',
  },
  {
    id: 2,
    title: 'Lol',
    text: 'Maybe not lol',
  },
];

export default class StorageProvider {
  constructor() {
    const adapter = new LocalStorage('todos');
    this.db = low(adapter);
    this.db.defaults({ todos: TODO_DEFAULTS }).write();
  }

  $get() {
    return this.db;
  }

  static name = 'storage';
}
