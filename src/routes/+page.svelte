<script>
	import ExperienceTimeline from '$lib/components/experience/ExperienceTimeline.svelte';
	import { experiences } from '$lib/components/experience/Experience';
	import { projects } from '$lib/components/projects/Projects';
	import ProjectTimeline from '$lib/components/projects/ProjectTimeline.svelte';
	import HorizontalLineBreak from '$lib/components/HorizontalLineBreak.svelte';
</script>

<svelte:head>
	<title>Arham's Website</title>
	<meta name="description" content="Welcome to my personal website and portfolio!" />
</svelte:head>

<div class=" mx-auto pt-8 pb-12">
	<div
		class="mx-auto max-w-4xl rounded-xl border border-white pb-12 shadow-2xl sm:px-6 lg:px-8 dark:border-black dark:bg-zinc-900 dark:shadow-white"
	>
		<section class="home-section space-y-1">
			<h2 class="mb-8 pt-16 text-2xl font-bold">About</h2>
			<div class="text-sm md:text-base">
				<p class="font-sans font-semibold">
					Hi!! I’m a software developer just starting out my career, eager to explore more of the
					programming world and excited to expand my skills - especially when it comes to full stack
					development.
				</p>
				<p class="pt-4 font-sans font-semibold">
					I've been programming since I was 14 years old and this led me to pursue it for my higher
					education, where I have earned a Bachelor of Computer Science from Carleton University. My
					enjoyment comes from learning new technologies, and I love applying that in my personal
					projects. I like working on personal projects that interest me and that are fun to make,
					while professionaly I am drawn to work that has a real-world impact.
				</p>
				<p class="pt-4 font-sans font-semibold">
					My hobbies include: Rock Climbing, Film, the NBA, Cricket, Reading Manga and playing Video
					Games. Feel free to get in contact with me, whether to talk programming, tech or anything
					else!!
				</p>

				<div class="columns-2 gap-2 pt-4 text-center">
					<p class="pb-2">Currently playing</p>
					<img
						src="./hollow-knight.png"
						alt="hollow knight"
						class="inline-block h-60 w-auto rounded-2xl align-middle outline-offset-2 outline-solid"
					/>

					<p class="pb-2">Currently Reading</p>
					<img
						src="./malcolm-x-bio.jpg"
						alt="malcolm x"
						class="inline-block h-60 w-auto rounded-2xl align-middle outline-offset-2 outline-solid"
					/>
				</div>
			</div>
		</section>
		<div class="pt-12 pb-4">
			<HorizontalLineBreak></HorizontalLineBreak>
		</div>
		<section class="">
			<ExperienceTimeline {experiences} />
		</section>
		<div class="pt-12 pb-4">
			<HorizontalLineBreak></HorizontalLineBreak>
		</div>
		<section class="">
			<ProjectTimeline {projects}></ProjectTimeline>
		</section>
	</div>
</div>
