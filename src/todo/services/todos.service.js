import angular from 'angular';

const DB_NAME = 'todos';
class TodoService {
    constructor(storage) {
        this.storage = storage;
        this.lastId = Math.max(...this.storage.get(DB_NAME).value().map(val => val.id));
    }

    getAll() {
        const todos = [...this.storage.get(DB_NAME).value() ];
        return todos;
    }

    getOne(id) {
        const todo = { ...this.storage.get(DB_NAME).find({ id }).value() };
        return todo;
    }

    createTodo(title, text) {
        return this.storage.get(DB_NAME).push({ title, text, id: ++this.lastId }).write();
    }

    removeTodo(id) {
        return this.storage.get(DB_NAME).remove({ id }).write();
    }

    updateTodo(todo) {
        return this.storage.get(DB_NAME).find({ id: todo.id }).assign({ ...todo }).write();
    }

    static name = 'todoService';
}


export default angular.module('app.todos.services', [])
    .service('todoService', TodoService)
    .name;
