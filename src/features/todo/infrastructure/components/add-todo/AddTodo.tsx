import './styles.module.css';
import { useCallback } from 'react';
import { dispatch } from '../../adapters/TodoEventStore';
import { useViewTransition } from '../../hooks/useViewTransition';

let logicalClock = 0;

export interface AddTodoProps {
  className?: string;
}

export function AddTodo({ className }: AddTodoProps) {
  const dispatchCreateTodo = useViewTransition((title: string) => {
    dispatch({
      id: `todo-${logicalClock++}`,
      type: 'CreateTodo',
      title,
    });
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData(event.currentTarget);
      const title = data.get('todo') as string;

      dispatchCreateTodo(title);
    },
    []
  );

  return (
    <form className={className} onSubmit={handleSubmit}>
      <input type="text" name="todo" placeholder="Todo" required />
      <input type="submit" value="create" />
    </form>
  );
}
