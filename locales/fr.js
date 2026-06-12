export default {
	sections: [
		{
			id: 1,
			header: "Événements",
			lead: "IWC, UBS, Roche, Sisley Paris, Manor. Performance autonome, sans installation.",
			action: "Demander un devis",
			url: "contact",
			media: {
				type: "image",
				legacy: "/img/800x800_event_live.jpg",
				modern: "/img/800x800_event_live.webp",
			},
		},
		{
			id: 2,
			header: "Mariages",
			lead: "Les portraits de vos invités, en direct. Chacun repart avec le sien.",
			action: "Réserver une date",
			url: "contact",
			media: {
				type: "image",
				legacy: "/img/800x800_hochzeit.jpg",
				modern: "/img/800x800_hochzeit.webp",
			},
		},
		{
			id: 3,
			header: "Notre dream team",
			lead: "Nicolas ? Il a tout orchestré depuis le début. Cecilia ? Le cash-flow, c'est son art ; offres et factures filent droit. Pascal… ? Just wing it, guys 😉",
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
		button: "Réserver",
		link: "contact",
	},
	theseBrandsTrustUs: "Ils nous font confiance",
	navigation: {
		home: "Accueil",
		about: "L'artiste",
		portfolio: "Portfolio",
		contact: "Contact",
	},
	contact: {
		passion1: "J'adore dessiner pour votre événement. C'est ma passion.",
		passion2: "N'hésitez pas — écrivez-moi.",
		title: "Contact",
		name: "Nom",
		mail: "E-mail",
		phone: "Telephone",
		message: "Message",
		send: "Envoyer",
		sent: "Envoye",
		error: "Erreur, le message n'a pas pu etre envoye.",
		success: {
			title: "Message envoye",
			subtitle: "Merci pour votre message. Pascal vous repondra dans les plus brefs delais.",
		},
	},
	footer: {
		legal: "Mentions legales",
		privacy: "Protection des donnees",
		settings: "Reglages",
		login: "Se connecter",
		logout: "Se deconnecter",
		loggedInAs: "Connecte en tant que",
	},
	admin: {
		event: {
			new: {
				title: "Titre",
				startDate: "Date de debut",
				endDate: "Date de fin",
				description: "Description",
				reset: "Reinitialiser",
				save: "Enregistrer",
			},
		},
		gallery: {
			new: {
				title: "Titre",
				description: "Description",
				save: "Enregistrer",
				reset: "Reinitialiser",
			},
		},
		sidebar: {
			create: "Creer",
			viewEvents: "Voir les evenements",
			viewGalleries: "Voir les galeries",
			setLocation: "Mettre a jour l'emplacement",
			currentLocation: "Voir l'emplacement actuel",
			settings: "Parametres",
		},
		create: {
			event: {
				title: "Creer un nouvel evenement",
				description: "Demarrer un nouvel evenement et creer une galerie de portraits.",
			},
			gallery: {
				title: "Creer une nouvelle galerie",
				description: "Creer une nouvelle galerie pour presenter vos portraits.",
			},
		},
		setLocation: {
			title: {
				loading: "Chargement de l'emplacement...",
				loaded: "Emplacement",
			},
			description: "Mettre a jour l'emplacement actuel. Cette information sera visible sur la page d'accueil si un evenement est prevu aujourd'hui.",
			upload: "Telecharger votre emplacement",
			lastUpdated: "Derniere mise a jour",
		},
		location: {
			title: "Emplacement",
			longitude: "Longitude",
			latitude: "Latitude",
			lastUpdated: "Derniere mise a jour",
		},
		settings: {
			warning: "Ces parametres s'appliquent a tous les utilisateurs du site. Veuillez modifier avec prudence.",
			theme: "Theme",
			primaryColor: "Couleur principale",
			colorChange: {
				success: "Theme mis a jour avec succes",
				error: "Erreur lors de la mise a jour du theme",
			},
		},
	},
	cards: {
		day: "Jour",
		days: "Jours",
	},
};
