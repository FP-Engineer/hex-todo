import { TodoAlreadyExists } from './events/TodoAlreadyExists';
import { TodoAlreadyResolved } from './events/TodoAlreadyResolved';
import { TodoCreated } from './events/TodoCreated';
import { TodoDoesNotExist } from './events/TodoDoesNotExist';
import { TodoResolved } from './events/TodoResolved';

declare global {
  interface TodoEventMap {
    TodoCreated: TodoCreated;
    TodoResolved: TodoResolved;
    TodoAlreadyExists: TodoAlreadyExists;
    TodoAlreadyResolved: TodoAlreadyResolved;
    TodoDoesNotExists: TodoDoesNotExist;
  }

  interface TodoEventTarget extends EventTarget {
    addEventListener<K extends keyof TodoEventMap>(
      type: K,
      listener: (this: EventTarget, ev: TodoEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof TodoEventMap>(
      type: K,
      listener: (this: EventTarget, ev: TodoEventMap[K]) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    dispatchEvent<K extends keyof TodoEventMap>(
      event: TodoEventMap[K]
    ): boolean;
  }

  const TodoEventTarget: {
    prototype: TodoEventTarget;
    new (): TodoEventTarget;
  };
}

export class EventBus extends EventTarget implements TodoEventTarget {
  static shared = new EventBus();
}
