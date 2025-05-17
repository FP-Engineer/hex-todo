import { TodoAlreadyExists as DomainEvent } from '../../../domain/events/TodoAlreadyExists';
import { BaseEvent } from './BaseEvent';

export const eventName = 'TodoAlreadyExists';

export class TodoAlreadyExists extends BaseEvent<DomainEvent> {
  constructor(id: string) {
    super(eventName, { type: eventName, id });
  }
}
