import { type Todo } from '../../domain/entities/Todo';
import { type TodoEvent as DomainEvent } from '../../domain/events';
import { type TodoCommand } from '../commands';
import { type CreateTodo } from '../commands/CreateTodo';
import { type ResolveTodo } from '../commands/ResolveTodo';
import { type EventStore } from '../ports/EventStore';
import { evolve } from '../../domain/entities/TodoList';
import { EventBus } from '../event-bus/TodoEventBus';
import { mapEvent } from '../event-bus/events/utilities';
import { TodoEvent } from '../event-bus/types';

export function createDispatcher(eventStore: EventStore) {
  return async function dispatch(command: TodoCommand) {
    const systemEvents = await eventStore.events.catch(() => [] as TodoEvent[]);
    const domainEvents = systemEvents.map(({ detail }) => detail);
    const nextDomainEvent = apply(domainEvents, command);
    const nextEvent = mapEvent(nextDomainEvent);

    eventStore.save(nextEvent);
    EventBus.shared.dispatchEvent(nextEvent);

    switch (nextEvent.type) {
      case 'TodoCreated':
      case 'TodoResolved':
        return Promise.resolve(nextEvent);
      case 'TodoAlreadyExists':
      case 'TodoDoesNotExist':
      case 'TodoAlreadyResolved':
        return Promise.reject(nextEvent);
    }
  };
}

export function apply(
  events: DomainEvent[],
  command: TodoCommand
): DomainEvent {
  const todos = events.reduce(evolve, []);

  return decide(todos, command);
}

export function decide(todos: Todo[], command: TodoCommand): DomainEvent {
  switch (command.type) {
    case 'CreateTodo':
      return handleCreateTodo(todos, command);
    case 'ResolveTodo':
      return handleResolveTodo(todos, command);
  }
}

function handleCreateTodo(todos: Todo[], command: CreateTodo): DomainEvent {
  const exists = todos.some(({ id }) => id === command.id);
  const type = exists ? 'TodoAlreadyExists' : 'TodoCreated';

  return { type, id: command.id, title: command.title };
}

function handleResolveTodo(todos: Todo[], command: ResolveTodo): DomainEvent {
  const todo = todos.find(({ id }) => id === command.id);
  const type = todo
    ? !todo.resolved
      ? 'TodoResolved'
      : 'TodoAlreadyResolved'
    : 'TodoDoesNotExist';

  return {
    id: command.id,
    type,
  };
}
