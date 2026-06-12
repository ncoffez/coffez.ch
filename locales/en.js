export default {
	sections: [
		{
			id: 1,
			header: "Events",
			lead: "IWC, UBS, Roche, Sisley Paris, Manor. Self-contained performance, no setup required.",
			action: "Request a quote",
			url: "contact",
			media: {
				type: "image",
				legacy: "/img/800x800_event_live.jpg",
				modern: "/img/800x800_event_live.webp",
			},
		},
		{
			id: 2,
			header: "Weddings",
			lead: "Live portraits of your guests. Everyone takes theirs home.",
			action: "Book a date",
			url: "contact",
			media: {
				type: "image",
				legacy: "/img/800x800_hochzeit.jpg",
				modern: "/img/800x800_hochzeit.webp",
			},
		},
		{
			id: 3,
			header: "Our dream team",
			lead: "Nicolas? He orchestrated the whole thing from day one. Cecilia? Cash-flow is her art — quotes and invoices always in line. Pascal… ? Just wing it, guys 😉",
			action: "",
			url: "",
			media: {
				type: "image",
				legacy: "/img/800x800_coffezch-team.jpg",
				modern: "/img/800x800_coffezch-team.webp",
			},
		},
	],
	header: {
		title: {
			text: "Coffez",
			special: "Montreux",
		},
		subtitle: "I make your guests shine.",
		button: "Book now",
		link: "contact",
	},
	theseBrandsTrustUs: "These brands trust us",
	navigation: {
		home: "Home",
		about: "About",
		portfolio: "Portfolio",
		contact: "Contact",
	},
	contact: {
		passion1: "I love drawing for your event. It is my passion.",
		passion2: "Don't hesitate — write to me.",
		title: "Contact us",
		name: "Name",
		mail: "Email",
		phone: "Phone",
		message: "Message",
		send: "Send",
		sent: "Sent",
		error: "The message could not be sent.",
		success: {
			title: "Sent successfully",
			subtitle: "Thank you for your message. We'll be in touch shortly.",
		},
	},
	footer: {
		legal: "Legal Notice",
		privacy: "Privacy Policy",
		settings: "Settings",
		login: "Login",
		logout: "Logout",
    loggedInAs: "Logged in as"
	},
	admin: {
		event: {
			new: {
				title: "Title",
				startDate: "Start Date",
				endDate: "End Date",
				description: "Description",
				reset: "Reset",
				save: "Save",
			},
		},
		gallery: {
			new: {
				title: "Title",
				description: "Description",
				save: "Save",
				reset: "Reset",
			},
		},
		sidebar: {
			create: "Create",
			viewEvents: "View all events",
			viewGalleries: "View all galleries",
			setLocation: "Update location",
			currentLocation: "View current location",
			settings: "Settings",
		},
		create: {
			event: {
				title: "Create a new event",
				description: "Start a new event and create a gallery of caricatures.",
			},
			gallery: {
				title: "Create a new gallery",
				description: "Create a new gallery to showcase your artwork.",
			},
		},
		setLocation: {
			title: {
				loading: "Loading location...",
				loaded: "Location",
			},
			description:
				"Update the current location of your ongoing event. This information will be visible on the homepage if an event is planned for today.",
			upload: "Upload your location",
			lastUpdated: "Last updated",
		},
		location: {
			title: "Location",
			longitude: "Longitude",
			latitude: "Latitude",
			lastUpdated: "Last update",
		},
		settings: {
			warning: "These settings apply to all users of the site. Please change carefully.",
			theme: "Theme",
			primaryColor: "Primary color",
			colorChange: {
				success: "Updated theme successfully",
				error: "Error updating theme",
			},
		},
	},
	cards: {
		day: "Day",
		days: "Days",
	},
};
