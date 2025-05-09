export class BaseEvent<T> extends CustomEvent<T> {
  constructor(type: string, payload: T) {
    super(type, {
      detail: payload,
    });
  }
}
