import { type EventStore } from '../ports/EventStore';
import { createDispatcher } from '../dispatcher/dispatcherFactory';
import { createQuery } from '../queries/queryFactory';

export function connect(eventStore: EventStore) {
  const query = createQuery(eventStore);
  const dispatch = createDispatcher(eventStore);

  return { query, dispatch };
}
