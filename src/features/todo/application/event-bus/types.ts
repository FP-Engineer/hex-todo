import { TodoAlreadyExists } from './events/TodoAlreadyExists';
import { TodoAlreadyResolved } from './events/TodoAlreadyResolved';
import { TodoCreated } from './events/TodoCreated';
import { TodoDoesNotExist } from './events/TodoDoesNotExist';
import { TodoResolved } from './events/TodoResolved';

export type TodoEvent =
  | TodoAlreadyExists
  | TodoAlreadyResolved
  | TodoCreated
  | TodoDoesNotExist
  | TodoResolved;
