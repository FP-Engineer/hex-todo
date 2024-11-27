import { Entity, EntityId } from "../entities/Entity";

export class Aggregate<T extends string> implements Entity<T> {
	public readonly observable: DomainEventTarget = new EventTarget();
	protected logicalClock = 0;

	constructor(public readonly id: EntityId<T>) {}
}

declare global {
	interface DomainEventMap {}

	interface DomainEventTarget extends EventTarget {
		addEventListener<K extends keyof DomainEventMap>(type: K, listener: (this: EventTarget, ev: DomainEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
		addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
		removeEventListener<K extends keyof DomainEventMap>(type: K, listener: (this: EventTarget, ev: DomainEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
		removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
		dispatchEvent<K extends keyof DomainEventMap>(event: DomainEventMap[K]): boolean
	}

	const DomainEventTarget: {
		prototype: DomainEventTarget;
		new(): DomainEventTarget;
	}
}