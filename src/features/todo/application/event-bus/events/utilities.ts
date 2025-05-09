import { TodoEvent } from '../../../domain/events';
import { TodoAlreadyExists } from './TodoAlreadyExists';
import { TodoAlreadyResolved } from './TodoAlreadyResolved';
import { TodoCreated } from './TodoCreated';
import { TodoDoesNotExist } from './TodoDoesNotExist';
import { TodoResolved } from './TodoResolved';

export function mapEvent(event: TodoEvent) {
  switch (event.type) {
    case 'TodoCreated':
      return new TodoCreated(event.id, event.title);
    case 'TodoAlreadyExists':
      return new TodoAlreadyExists(event.id);
    case 'TodoDoesNotExist':
      return new TodoDoesNotExist(event.id);
    case 'TodoResolved':
      return new TodoResolved(event.id);
    case 'TodoAlreadyResolved':
      return new TodoAlreadyResolved(event.id);
  }
}
