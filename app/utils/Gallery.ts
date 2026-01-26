export class Gallery {
	id?: string;
	title: string;
	description: string;
	coverImage: string;
	images?: string[];

	constructor(gallery?: Gallery) {
		this.title = "New Gallery";
		this.description = "This text should be fancier.";
		this.coverImage = "/img/gallery-placeholder.jpg";
		if (gallery) Object.assign(this, gallery);
	}
}
