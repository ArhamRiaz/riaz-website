<script>
	import ExperienceTimeline from '$lib/components/experience/ExperienceTimeline.svelte';
	import { experiences } from '$lib/components/experience/Experience';
	import { projects } from '$lib/components/projects/Projects';
	import ProjectTimeline from '$lib/components/projects/ProjectTimeline.svelte';
	import HorizontalLineBreak from '$lib/components/HorizontalLineBreak.svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';
</script>

<svelte:head>
	<title>Arham's Website</title>
	<meta name="description" content="Welcome to my personal website and portfolio!" />
</svelte:head>

<div class="mx-auto pt-8 pb-12">
	<div class="flex items-start gap-6">
		<div
			class="min-w-0 flex-1 rounded-xl border border-white bg-white pb-12 shadow-2xl sm:px-6 lg:px-8 dark:border-black dark:bg-zinc-900 dark:shadow-white"
		>
			<section id="about" class="home-section space-y-1">
				<div class="pt-18 text-sm md:text-base">
					<div class="pb-6 text-3xl font-semibold md:text-3xl">
						<Typewriter text="Hi I'm Arham!!" speed={60} />
					</div>
					<p class=" text-xl">
						I'm a software developer just starting out my career, eager to explore more of the
						programming world and excited to expand my skills - especially when it comes to full
						stack development.
					</p>
					<p class="pt-4 text-xl">
						My hobbies include: rock climbing, film, the NBA, reading manga and playing video games.
						Feel free to get in contact with me, whether to talk programming, tech or anything
						else!!
					</p>
				</div>
			</section>

			<div class="pt-12 pb-4">
				<HorizontalLineBreak />
			</div>
			<section id="experience">
				<ExperienceTimeline {experiences} />
			</section>
			<div class="pt-12 pb-4">
				<HorizontalLineBreak />
			</div>
			<section id="projects">
				<ProjectTimeline {projects} />
			</section>
		</div>

		<!-- ── Right sidebar ── -->
		<aside class="hidden w-52 shrink-0 xl:block" style="position: sticky; top: 6rem;">
			<div class="flex flex-col gap-6">
				<div
					class="rounded-xl border border-white bg-white p-4 shadow-md dark:border-black dark:bg-zinc-900 dark:shadow-white"
				>
					<p
						class="mb-3 text-center text-xs font-semibold tracking-widest text-stone-400 uppercase dark:text-zinc-500"
					>
						Currently Playing
					</p>
					<img
						src="./hollow-knight.png"
						alt="Hollow Knight"
						class="w-full rounded-lg object-cover shadow-sm"
					/>
				</div>

				<div
					class="rounded-xl border border-white bg-white p-4 shadow-md dark:border-black dark:bg-zinc-900 dark:shadow-white"
				>
					<p
						class="mb-3 text-center text-xs font-semibold tracking-widest text-stone-400 uppercase dark:text-zinc-500"
					>
						Currently Reading
					</p>
					<img
						src="./malcolm-x-bio.jpg"
						alt="The Autobiography of Malcolm X"
						class="w-full rounded-lg object-cover shadow-sm"
					/>
				</div>
			</div>
		</aside>
	</div>
</div>
