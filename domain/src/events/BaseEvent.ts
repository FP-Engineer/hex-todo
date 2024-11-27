export class BaseEvent<T> extends CustomEvent<T & { createdAt: Date }> {
	constructor(type: string, payload: T) {
		super(type, { detail: {
			createdAt: new Date(),
			...payload,
		} });
	}
}