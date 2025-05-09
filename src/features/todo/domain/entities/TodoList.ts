import { type TodoEvent } from '../events';
import { of, resolve, type Todo } from './Todo';

export type TodoList = Todo[];

export function evolve(todos: Todo[], event: TodoEvent): TodoList {
  switch (event.type) {
    case 'TodoCreated':
      return [...todos, of(event.id, event.title)];
    case 'TodoResolved':
      return todos.map((todo) => (todo.id === event.id ? resolve(todo) : todo));
    case 'TodoAlreadyExists':
    case 'TodoDoesNotExist':
    case 'TodoAlreadyResolved':
      return [...todos];
  }
}
