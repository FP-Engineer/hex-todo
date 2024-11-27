import { BaseEvent } from "./BaseEvent";
import { ToDoId } from "../entities";
import { ToDoEventName } from "./types";

export class ToDoCreated extends BaseEvent<{
	id: ToDoId
}> {
	constructor(id: ToDoId) {
		super(ToDoEventName.created, { id });
	}
}