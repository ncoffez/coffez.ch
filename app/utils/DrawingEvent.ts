export class DrawingEvent {
  id?: string;
  title: string;
  startDate: string;
  endDate: string;
  coverImage?: string;
  description?: string;
  constructor(event?: DrawingEvent) {
    this.title = "New Event";
    this.startDate = new Date(new Date().setHours(2, 0, 0, 0)).toISOString();
    this.endDate = new Date(new Date().setHours(25, 59, 59, 999)).toISOString();
    this.description = "Pascal Coffez captures the unique personalities and spirit of the occasion. This artistic touch added a memorable element to this event.";
    if (event) Object.assign(this, event)
  }
}
