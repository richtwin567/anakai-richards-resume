import { ResumeEntry } from "@/types/resume_entry";

export const workExperience : ResumeEntry[]= [
	{
		title: 'Software Engineer',
		subtitle: 'GraceKennedy Financial Group Limited',
		startDate: '09/2023',
		endDate: 'Present',
		achievements: [
			'Spearheaded the backend software architecture design and implementation for the motor insurance quote and buy feature, delivering the MVP in less than a year.',
			'Led the initiative to transition to event-driven architecture, including conducting a training series to educate colleagues on the implementation process and lessons learned.',
			'Implemented 5 microservices focused on delivering key stakeholder requirements while ensuring robustness and resilience due to unreliable 3rd party services.',
			'Architected a data dictionary generator that automated documentation extraction from codebases, streamlining the software development process and saving an estimated 15 hours of manual documentation efforts each month.',
			'Implemented frontend user flows in Flutter to satisfy stakeholder requirements and the specifications created by UI/UX designers.',
			'Collaborated within an Agile team to gather detailed requirements from stakeholders, respond rapidly to changing specifications, and produce deliverables.',
			'Mentored two peers newly introduced to backend development in ASP.NET and the best practices established sessions and code reviews.',
		],
		show: true,
	},
	{
		title: 'Software Engineer Associate',
		subtitle: 'GraceKennedy Financial Group Limited',
		startDate: '09/2022',
		endDate: '09/2023',
		show: true,
	},
	{
		title: 'Lab Services Intern',
		subtitle: 'Innovate10X',
		startDate: '05/2021',
		endDate: '07/2021',
		achievements: [
			'Fixed bugs and added new features for Vue and Laravel web app projects.',
			'Revamped the GitHub workflow by implementing best practices for version control, which resulted in a significant improvement in code quality and accelerated code integration timelines for two web app projects.',
		],
		show: true,
	},
	{
		title: 'Adjunct Computing Laboratory Assistant',
		subtitle: 'The University of the West Indies, Mona Campus',
		startDate: '09/2020',
		endDate: '12/2020',
		achievements: [
			'Marked labs for Computing first-years and provided constructive feedback to the students.',
			'Facilitated in-depth study sessions for first-year computing students, addressing programming concepts and assignments.',
		],
		show: true,
	},
	{
		title: '2020 FST App Development Team Member',
		subtitle: 'UWI Mona Computing Society',
		startDate: '07/2020',
		endDate: '07/2020',
		achievements: [
			'Developed new features for the FST App using Django and Flutter.',
			'Maintainer for GitHub frontend and backend repositories.',
		],
		show: true,
	},
];
