import { TodoEvent } from '../event-bus/types';

export interface EventStore {
  get events(): Promise<TodoEvent[]>;
  save(event: TodoEvent): Promise<void>;
}
