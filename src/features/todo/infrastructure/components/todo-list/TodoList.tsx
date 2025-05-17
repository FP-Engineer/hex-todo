import './styles.module.css';
import { useTodoList } from '../../repositories/Todos';
import { Todo } from '../todo';

export interface TodoListProps {
  className?: string;
}

export function TodoList({ className }: TodoListProps) {
  const { todos } = useTodoList();

  return (
    <ul className={className}>
      {todos.toReversed().map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
