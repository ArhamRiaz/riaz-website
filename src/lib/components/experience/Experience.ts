export interface Experience {
	id: string;
	company: string;
	role: string;
	dates: string;
	bullets: string[];
	tech: string[];
	logo: string;
}

export const experiences: Experience[] = [
	{
		id: 'Bridge',
		company: 'Bridge Wireless Solutions',
		role: 'Software Developer ',
		dates: 'Jun 2025 – Present',
		bullets: [
			'Engineered core full-stack features using TypeScript, React, and Kotlin for an AWS-deployed mobile application, supporting scalable deployment and reliable data storage through Amplify, Lambda, S3, and DynamoDB, while enforcing secure access via IAM roles and least-privilege policies.',
			'Built a customer-facing device buyback widget using React and TypeScript, integrating with existing buyback infrastructure and backend APIs to streamline the user experience and increase device buybacks by 20%.',
			'Administered and supported the company’s ERP system by managing and optimizing S3 storage and EC2 usage, monitoring resource utilization with CloudWatch, and reducing monthly AWS infrastructure costs by 15%.'
		],
		tech: ['TypeScript', 'React', 'Node.js', 'Kotlin', 'AWS', 'MSSQL'],
		logo: '/bridge.jpg'
	},
	{
		id: 'Ross',
		company: 'Ross Video',
		role: 'Full Stack Software Developer Co-op',
		dates: 'Sep 2022 – Aug 2023',
		bullets: [
			'Developed and maintained full-stack features using TypeScript and React for internal dashboard applications',
			'Worked extensively in pair programming environments, collaborating daily with senior developers',
			'Applied test-driven development practices, writing unit and integration tests to improve code reliability',
			'Participated in code reviews and agile ceremonies, contributing to high-quality, production-ready releases'
		],
		tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'TDD'],
		logo: '/ross.png'
	},
	{
		id: 'Carleton',
		company: 'Carleton University',
		role: 'Teaching Assistant - COMP4004',
		dates: 'Sep 2024 – Dec 2024',
		bullets: [
			'Held weekly office hours to provide guidance to students in using relevant frameworks and programs including JUnit, Spring Boot, Selenium and Cucumber.',
			'Assisted students in troubleshooting and debugging code, helping them to understand Test Driven Development and Behavioral Driven Development ideas and implementations.',
			'Graded and provided detailed feedback on 3 assignments to over 100 students, evaluating students’ understanding of key course concepts.'
		],
		tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'TDD'],
		logo: '/carleton.jpg'
	}
];
