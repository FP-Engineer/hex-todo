import { ToDoId } from "../entities";
import { BaseEvent } from "./BaseEvent";
import { ToDoEventName } from "./types";

export class ToDoCanceled extends BaseEvent<{
	id: ToDoId
}> {
	constructor(id: ToDoId) {
		super(ToDoEventName.canceled, { id });
	}
}