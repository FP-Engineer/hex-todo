import { useCallback, useState, useSyncExternalStore } from 'react';
import { EventBus } from '../../application/event-bus/TodoEventBus';
import { query } from '../adapters/TodoEventStore';
import { type TodoList } from '../../domain/entities/TodoList';

export function useTodoList(...ids: string[]) {
  const [todosDto, setTodos] = useState<{ todos: TodoList }>({ todos: [] });
  const refresh = useCallback(async () => {
    const todos = await query(...ids);
    setTodos({ todos });
  }, []);

  return useSyncExternalStore(
    (onStorechange) => {
      EventBus.shared.addEventListener('TodoCreated', refresh);
      EventBus.shared.addEventListener('TodoResolved', refresh);
      EventBus.shared.addEventListener('TodoCreated', onStorechange);
      EventBus.shared.addEventListener('TodoResolved', onStorechange);
      return () => {
        EventBus.shared.addEventListener('TodoCreated', refresh);
        EventBus.shared.addEventListener('TodoResolved', refresh);
        EventBus.shared.removeEventListener('TodoCreated', onStorechange);
        EventBus.shared.removeEventListener('TodoResolved', onStorechange);
      };
    },
    () => todosDto
  );
}
