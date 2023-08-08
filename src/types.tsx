/** @format */

export type BlogPost = {
	title: string;
	publishedAt: Date;
	slug: { current: string; _type: string };
	body: any;
};

export type PostPreview = { title: string; publishedAt: Date; slug: { current: string; _type: string } };

export interface Project {
	title: string;
	number: number;
	image: string;
	description: string;
	technologies: Technology[];
	date: Date;
	liveLink?: string;
	githubLink?: string;
	blogLink?: string;
	_id: string;
}
export interface Projects {
	[key: string]: Project;
}

export type PageContextType = "" | "Projects" | "Blog" | "Hire Me" | "Contact";
export const TECHNOLOGIES = ["Javascript"
	, "Python"
	, "React"
	, "Typescript"
	, "GCP"
	, "OpenAI APIs"
	, "NoSQL"
	, "Firebase"
	, "Node"
	, "Material UI"
	, "NLP"
	, "SQL"
	, "Sanity"
	, "Django"
	, "AWS"
	, "DynamoDB"
	, "Stripe"] as const;

export type Technology = typeof TECHNOLOGIES[number];

export type Education = {
	school: string;
	graduation: Date;
	degree: string;
	distinction: string;
	bulletPoints: string[];
};

export type Experience = {
	title: string;
	start: Date;
	end?: Date;
	company: string;
	location: string;
	bulletPoints: string[];
};

export interface Resume {
	name: string;
	byline: string[];
	email: string;
	phone: string;
	website: string;
	github: string;
	linkedin: string;
	contact: string;
	projectRefs: {_ref: string};
	projects: Project[];
	skills: string[];
	education: Education[];
	experience: Experience[];
	_id: string;
};

export interface SanityContextProps {
	posts: PostPreview[];
	projects: Project[];
	resume: Resume;
	fetchData: () => void;
}
