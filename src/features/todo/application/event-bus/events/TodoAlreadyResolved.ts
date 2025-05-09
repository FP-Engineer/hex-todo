import { TodoAlreadyResolved as DomainEvent } from '../../../domain/events/TodoAlreadyResolved';
import { BaseEvent } from './BaseEvent';

export const eventName = 'TodoAlreadyResolved';

export class TodoAlreadyResolved extends BaseEvent<DomainEvent> {
  constructor(id: string) {
    super(eventName, { type: eventName, id });
  }
}
