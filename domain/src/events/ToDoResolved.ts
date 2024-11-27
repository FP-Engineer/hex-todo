import { ToDoId } from "../entities";
import { BaseEvent } from "./BaseEvent";
import { ToDoEventName } from "./types";

export class ToDoResolved extends BaseEvent<{
	id: ToDoId
}> {
	constructor(id: ToDoId) {
		super(ToDoEventName.resolved, { id });
	}
}
