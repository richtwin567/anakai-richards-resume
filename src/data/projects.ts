import { ResumeEntry } from "@/types/resume_entry";

export const projects: ResumeEntry[] = [
	{
		title: 'Hole Heap',
		subtitle: 'Intellibus AI Hackathon 2025',
		startDate: '03/2025',
		endDate: '',
		achievements: [
			'Collaborated in a 4-person development team over 24hrs to build a real-time pothole reporting and alert system that helps protect drivers and their cars, and assists authorities in identifying potholes that need to be fixed.',
			'Architected and developed the backend (REST API in Flask, using CloudAMPQ).',
			'Implemented CI/CD for the backend on Render.',
			'Refined the project idea in collaboration with other team members.',
		],
		show: true,
	},
	{
		title: 'Fingo',
		subtitle: 'NSBEHacks UofT 2021',
		startDate: '02/2021',
		endDate: '',
		achievements: [
			'Collaborated in a 4-person development team over 48hrs to build an app to provide consolidated financial information to help people on their journey to financial literacy.',
			'Implemented the frontend design using React Js according to specifications of the UI/UX designer.',
		],
		show: true,
	},
];
