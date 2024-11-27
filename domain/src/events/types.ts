import {
	ToDoCanceled,
	ToDoCreated,
	ToDoFailed,
	ToDoResolved,
	ToDoStarted
} from ".";

export type ToDoEvent = 
	ToDoCreated
	| ToDoStarted
	| ToDoResolved
	| ToDoFailed
	| ToDoCanceled;

export enum ToDoEventName {
	created = "ToDoCreated",
	started = "ToDoStarted",
	resolved = "ToDoResolved",
	failed = "ToDoFailed",
	canceled = "ToDoCanceled",
}

export type ToDoEventMap = {
	[ToDoEventName.created]: ToDoCreated,
	[ToDoEventName.started]: ToDoStarted,
	[ToDoEventName.resolved]: ToDoResolved,
	[ToDoEventName.failed]: ToDoFailed,
	[ToDoEventName.canceled]: ToDoCanceled,
};

export interface ToDoEventTarget extends EventTarget {
	addEventListener<K extends keyof ToDoEventMap>(type: K, listener: (this: EventTarget, ev: ToDoEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
	addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
	removeEventListener<K extends keyof ToDoEventMap>(type: K, listener: (this: EventTarget, ev: ToDoEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
	removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
	dispatchEvent<K extends keyof ToDoEventMap>(event: ToDoEventMap[K]): boolean
}

export declare const ToDoEventTarget: {
	prototype: ToDoEventTarget;
	new(): ToDoEventTarget;
}
