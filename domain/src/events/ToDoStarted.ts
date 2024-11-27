import { ToDoId } from "../entities";
import { BaseEvent } from "./BaseEvent";
import { ToDoEventName } from "./types";

export class ToDoStarted extends BaseEvent<{
	id: ToDoId
}> {
	constructor(id: ToDoId) {
		super(ToDoEventName.started, { id });
	}
}