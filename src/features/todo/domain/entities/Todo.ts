export type Todo = {
  id: string;
  title: string;
  resolved: boolean;
};

export function of(id: string, title: string): Todo {
  return { id, title, resolved: false };
}

export function resolve(todo: Todo): Todo {
  return { ...todo, resolved: true };
}
