export interface Project {
	id: string;
	name: string;
	description: string;
	github: string;
	tech: string[];
	thumbnail: string;
}

export const projects: Project[] = [
	{
		id: 'album',
		name: 'Album Tracking Website',
		description:
			'A website designed to allow users to track what music albums they have listened to and want to listen to',
		github: 'https://github.com/ArhamRiaz/AlbumListProject',
		tech: ['JavaScript', 'Node.js', 'DynamoDB', 'Amplify', 'Lambda'],
		thumbnail: '/album-tracker.png'
	}
];
