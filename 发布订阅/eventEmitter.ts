const eventNames = ["API:UN_AUTH", "API:INVALID"] as const;
type EventName = (typeof eventNames)[number];
class EventEmitter {
  private listeners: Record<EventName, Set<Function>> = {
    "API:UN_AUTH": new Set(),
    "API:INVALID": new Set(),
  };
  on(eventName: EventName, listener: Function) {
    this.listeners[eventName].add(listener);
  }
  emit(eventName: EventName, ...args: any[]) {
    this.listeners[eventName].forEach((item) => item(args));
  }
}
export default new EventEmitter();
