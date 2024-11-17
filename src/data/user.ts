interface Project {
	title: string;
	description: string;
	logo: string;
	linkText: string;
	link: string;
  }
  
  interface Info {
	main: {
	  title: string;
	  name: string;
	  email: string;
	  logo: string;
	};
	socials: {
	  twitter: string;
	  github: string;
	  linkedin: string;
	  instagram: string;
	  medium: string;
	};
	homepage: {
	  title: string;
	  description: string;
	};
	about: {
	  title: string;
	  description: string;
	};
	articles: {
	  title: string;
	  description: string;
	};
	projects: Project[];
  }

const INFO: Info = {
	main: {
		title: "Dan Beglin",
		name: "Dan Beglin",
		email: "mail@danbeglin.co.uk",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/@smarthomedan",
		github: "https://github.com/dannyb648",
		linkedin: "https://www.linkedin.com/in/dan-beglin/",
		instagram: "https://instagram.com/smarthomedan",
		medium: "https://medium.com/@smarthomedan",
	},

	homepage: {
		title: "Engineering Manager, Lead API Developer and Smart Home Enthusiast",
		description:
			"I am a dynamic and results-driven engineering leader with a passion for managing and scaling software delivery teams. Currently, I lead the API Department at Griffiths Waite, where I focus on line management, professional development, and achieving our quarterly OKRs. I thrive on building and leading remote teams, defining engineering standards, and driving the adoption of innovative technologies like AWS and Azure. My experience includes developing robust microservices, implementing secure cloud solutions, and delivering high-impact projects in fast-paced environments.",
	},

	about: {
		title: "I’m Dan Beglin. I live in UK, where I like to get stuff built.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I love sharing what I've learnt, on management, programming or just mistakes I've made",
		description:
			"Chronological collection of my long-form thoughts on most things.",
	},

	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
