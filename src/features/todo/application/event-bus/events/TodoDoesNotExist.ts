import { TodoDoesNotExist as DomainEvent } from '../../../domain/events/TodoDoesNotExist';
import { BaseEvent } from './BaseEvent';

export const eventName = 'TodoDoesNotExist';

export class TodoDoesNotExist extends BaseEvent<DomainEvent> {
  constructor(id: string) {
    super(eventName, { type: eventName, id });
  }
}
