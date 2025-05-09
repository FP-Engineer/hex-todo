import { TodoResolved as DomainEvent } from '../../../domain/events/TodoResolved';
import { BaseEvent } from './BaseEvent';

export const eventName = 'TodoResolved';

export class TodoResolved extends BaseEvent<DomainEvent> {
  constructor(id: string) {
    super(eventName, { type: eventName, id });
  }
}
