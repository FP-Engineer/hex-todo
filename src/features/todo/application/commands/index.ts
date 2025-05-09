import { CreateTodo } from './CreateTodo';
import { ResolveTodo } from './ResolveTodo';

export type TodoCommand = CreateTodo | ResolveTodo;
