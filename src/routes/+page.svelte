<script>
	import ExperienceTimeline from '$lib/components/experience/ExperienceTimeline.svelte';

	const experiences = [
		{
			company: 'Ross Video',
			role: 'Software Developer Intern',
			dates: 'Sep 2022 – Aug 2023',
			bullets: [
				'Developed and maintained full-stack features using TypeScript and React for internal dashboard applications',
				'Worked extensively in pair programming environments, collaborating daily with senior developers',
				'Applied test-driven development practices, writing unit and integration tests to improve code reliability',
				'Participated in code reviews and agile ceremonies, contributing to high-quality, production-ready releases'
			],
			tech: ['TypeScript', 'React', 'Node.js', 'Jest', 'Pair Programming', 'TDD']
		}
	];
</script>

<svelte:head>
	<title>Arham's Website</title>
	<meta name="description" content="Welcome to my personal website and portfolio!" />
</svelte:head>

<nav>
	<a href="/">About</a>
	<a href="/">Experience</a>
	<a href="/about">Projects</a>
</nav>

<section class="home-section">
	<div class="space-y-1 md:space-y-4">
		<h1 class="font-semibold text-stone-700">Arham Riaz</h1>
		<h4 class="text-muted-foreground">Software Developer</h4>
	</div>
</section>
<!-- <LineDecoration class="absolute transform rotate-2" /> -->

<section class="home-section space-y-1 text-stone-700 md:space-y-4">
	<h3 class="section-label pb-2">About</h3>
	<div class="text-sm text-stone-600 md:text-base">
		<p>
			Hi!! I’m a software developer with an Honours Bachelor of Computer Science Co-op from Carleton
			University! I made this website to act as a portfolio for my projects and to showcase myself
			to ___ .
		</p>
		<p>Hobbies: Rock Climbing, Film, NBA, Cricket, Gaming</p>

		<p>
			Currently playing: Hollow Knight <img src="/hollow knight.jpg" alt="hollow knight" />
		</p>
	</div>
	<ExperienceTimeline {experiences} />
</section>
