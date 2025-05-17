import style from './styles.module.css';
import { AddTodo } from '../features/todo/infrastructure/components/add-todo';
import { TodoList } from '../features/todo/infrastructure/components/todo-list';

export function App() {
  return (
    <main>
      <h1>Todo List</h1>
      <AddTodo className={style.actions} />
      <TodoList className={style.list} />
    </main>
  );
}
