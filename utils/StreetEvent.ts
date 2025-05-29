export class StreetEvent {
	id?: string;
	title: string;
	date: string;
	coverImage?: string;
	description?: string;
	type?: string;
	constructor(event?: StreetEvent) {
		this.title = "New Event";
		this.date = new Date(new Date().setHours(2, 0, 0, 0)).toISOString();
		this.description =
			"Pascal Coffez captures the unique personalities and spirit of the occasion. This artistic touch added a memorable element to this event.";
		if (event) Object.assign(this, event);
    
	}
}
