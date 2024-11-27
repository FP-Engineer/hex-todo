import { State, ToDo, ToDoId } from "../entities";
import { EntityId } from "../entities/Entity";
import { ToDoCreated, ToDoStarted, ToDoResolved, ToDoFailed, ToDoCanceled } from "../events";
import { ToDoEventName } from "../events/types";
import { Aggregate } from "./Aggregate";

export type ToDoModel = { title: string, description: string, state: State };

type ToDoListIdKey = "ToDoListId";
export type ToDoListId = EntityId<ToDoListIdKey>;
export class ToDoList extends Aggregate<ToDoListIdKey> {
	private todos: Array<ToDo> = [];

	public add(data: Omit<ToDoModel, "id" | "state">) {
		const todo: ToDo = {
			...data,
			id: this.logicalClock++ as ToDoId,
			state: "created",
		};

		this.todos.push(todo);
		this.observable.dispatchEvent(new ToDoCreated(todo.id));
	}

	public get(id: ToDoId) {
		const todo = this.todos.find(({ id: todoId }) => id === todoId);
		const snapshot = todo && Object.freeze({ ...todo });

		return snapshot;
	}

	public get all() {
		return this.todos.map(({ id }) => id);
	}

	public start(id: ToDoId) {
		this.update(id, { state: "started" });
		this.observable.dispatchEvent(new ToDoStarted(id));
	}

	public resolve(id: ToDoId) {
		this.update(id, { state: "resolved" });
		this.observable.dispatchEvent(new ToDoResolved(id));
	}

	public cancel(id: ToDoId) {
		this.update(id, { state: "canceled" });
		this.observable.dispatchEvent(new ToDoCanceled(id));
	}

	public fail(id: ToDoId) {
		this.update(id, { state: "failed" });
		this.observable.dispatchEvent(new ToDoFailed(id));
	}

	private update(id: ToDoId, newVal: Partial<Omit<ToDo, "id">>) {
		this.todos = this.todos.map((todo) => todo.id === id ? { ...todo, ...newVal } : todo);
	}
}

declare global {
	interface DomainEventMap {
		[ToDoEventName.created]: ToDoCreated,
		[ToDoEventName.started]: ToDoStarted,
		[ToDoEventName.resolved]: ToDoResolved,
		[ToDoEventName.failed]: ToDoFailed,
		[ToDoEventName.canceled]: ToDoCanceled,
	}
}