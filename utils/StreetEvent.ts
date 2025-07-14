export class StreetEvent {
	id?: string;
	title: string;
	date: string;
	coverImage?: string;
	description?: string;
	type?: string;
	constructor(city: String, event?: StreetEvent) {
		this.date = new Date(new Date().setHours(2, 0, 0, 0)).toISOString();
    this.coverImage = "/img/street-event.jpeg"
		if (event) Object.assign(this, event);
		this.title = `Street event in ${city}`;
		this.description = `Pascal roams the streets of ${city} on his bike and draws caricatures of the crowds.`;
	}
}
