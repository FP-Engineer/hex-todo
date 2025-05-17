import { TodoCreated as DomainEvent } from '../../../domain/events/TodoCreated';
import { BaseEvent } from './BaseEvent';

export const eventName = 'TodoCreated';

export class TodoCreated extends BaseEvent<DomainEvent> {
  constructor(id: string, title: string) {
    super(eventName, { type: eventName, id, title });
  }
}
