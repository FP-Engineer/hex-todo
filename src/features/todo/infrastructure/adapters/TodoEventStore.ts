import { type EventStore } from '../../application/ports/EventStore';
import { TodoEvent } from '../../application/event-bus/types';
import { useTodoEvents } from '../repositories/TodoEvents';
import { connect } from '../../application/connectors';

export class InmemoryEventStore implements EventStore {
  static shared: InmemoryEventStore = new InmemoryEventStore();

  get events() {
    return Promise.resolve(useTodoEvents.getState().events);
  }

  async save(event: TodoEvent) {
    useTodoEvents.getState().add(event);
  }
}

export const { dispatch, query } = connect(InmemoryEventStore.shared);
