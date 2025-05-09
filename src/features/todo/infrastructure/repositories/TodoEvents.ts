import { create } from 'zustand';
import { TodoEvent } from '../../application/event-bus/types';

export type EventState = {
  events: TodoEvent[];
  add: (event: TodoEvent) => void;
};

export const useTodoEvents = create<EventState>((set) => ({
  events: [],
  add: (event) =>
    set((state) => ({
      events: [...state.events, event],
    })),
}));
