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
			'Administered and supported the company’s ERP system by managing and optimizing S3 storage and EC2 usage, monitoring resource utilization with CloudWatch, and reducing monthly AWS infrastructure costs by 15%.',
			'Designed and implemented RESTful APIs alongside engineering teams from Samsung and Bell, using AWS API Gateway to define endpoints and integration requirements that enabled cross-system communication.',
			'Optimized and restructured Microsoft SQL Server stored procedures to improve Power BI integrations, reducing query times by 40%, significantly boosting reporting accuracy and refresh speed.'
		],
		tech: ['TypeScript', 'React', 'Node.js', 'Kotlin', 'AWS', 'MSSQL'],
		logo: '/bridge.jpg'
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
		tech: ['JUnit', 'Spring Boot', 'Cucumber', 'Selenium', 'TDD', 'BDD'],
		logo: '/carleton.jpg'
	},
	{
		id: 'Ross',
		company: 'Ross Video',
		role: 'Full Stack Software Developer Co-op',
		dates: 'Sep 2022 – Aug 2023',
		bullets: [
			'Developed a dashboard web app using TypeScript, React and Redux aimed at creating comprehensive KPIs associated with product progress, integrating JIRA and Jenkins APIs, reducing manual workload by 70%.',
			'Built back-end services using Node.js and implemented optimized database models with Prisma and PostgreSQL, improving system scalability and increasing database query performance by 30%.',
			'Enhanced existing web pages with React and TypeScript, creating dynamic, responsive interfaces that improved maintainability and page performance, resulting in a smoother user experience and reduced load times.',
			'Maintained a CI/CD pipeline with Jenkins, streamlining software integration from multiple developers, automating deployment, and decreasing lead time by 50% to ensure continuous delivery.',
			'Created unit tests following Test Driven Development principles to ensure code reliability and maintainability.',
			'Led code reviews and worked with team members to troubleshoot, debug and optimize code.'
		],
		tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'TDD'],
		logo: '/ross.png'
	}
];
