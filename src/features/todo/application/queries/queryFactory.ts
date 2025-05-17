import { type TodoEvent } from '../event-bus/types';
import { type EventStore } from '../ports/EventStore';
import { evolve } from '../../domain/entities/TodoList';

export function createQuery(eventStore: EventStore) {
  return async function query(...ids: string[]) {
    const events = await eventStore.events.catch(() => [] as TodoEvent[]);
    const domainEvents = events.map(({ detail }) => detail);
    const selectedEvents = ids.length
      ? domainEvents.filter(({ id }) => ids.includes(id))
      : domainEvents;
    const todos = selectedEvents.reduce(evolve, []);

    return todos;
  };
}
