import { TodoAlreadyExists } from './TodoAlreadyExists';
import { TodoAlreadyResolved } from './TodoAlreadyResolved';
import { TodoCreated } from './TodoCreated';
import { TodoDoesNotExist } from './TodoDoesNotExist';
import { TodoResolved } from './TodoResolved';

export type TodoEvent =
  | TodoCreated
  | TodoAlreadyExists
  | TodoDoesNotExist
  | TodoResolved
  | TodoAlreadyResolved;
