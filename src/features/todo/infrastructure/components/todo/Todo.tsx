import './styles.global.css';
import './styles.module.css';
import { useCallback } from 'react';
import { dispatch } from '../../adapters/TodoEventStore';

export type TodoProps = {
  id: string;
  title: string;
  resolved: boolean;
};

export function Todo({ id, title, resolved }: TodoProps) {
  const handleClick = useCallback(
    () => dispatch({ type: 'ResolveTodo', id }),
    [id]
  );

  return (
    <li id={id}>
      <label>
        <input
          type="checkbox"
          defaultChecked={resolved}
          onClick={handleClick}
          disabled={resolved}
          readOnly
        />
        {title}
      </label>
    </li>
  );
}
