import { Entity, EntityId } from "./Entity";
import "../events/types";

type ToDoIdKey = "ToDoId";
export type ToDoId = EntityId<ToDoIdKey>;
export type State = "created" | "started" | "resolved" | "canceled" | "failed";

export type ToDo = Entity<ToDoIdKey> & {
	state: State,
	title: string,
	description: string,
}
