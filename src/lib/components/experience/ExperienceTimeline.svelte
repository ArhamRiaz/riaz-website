<script lang="ts">
	import ExperiencePreview from './ExperiencePreview.svelte';
	import ExperienceModal from './ExperienceModal.svelte';
	import ExperienceCard from './ExperienceCard.svelte';
	import type { Experience } from './Experience';
	import { fade, scale } from 'svelte/transition';

	export let experiences;
	let activeId: string | null = null;

	function collapse() {
		activeId = null;
	}

	let selected: Experience | null | any = null;
</script>

<section
	id="experience"
	class="mx-auto max-w-7xl px-4"
	role="button"
	tabindex="0"
	on:click={collapse}
	on:keydown={(e) => e.key === 'Escape' && collapse()}
>
	<h2 class="mb-8 text-2xl font-bold">Experience</h2>

	<div
		class="grid grid-cols-1
				gap-6
				sm:grid-cols-2
				lg:grid-cols-3"
	>
		{#each experiences as exp}
			<button type="button" on:click|stopPropagation class="relative">
				{#if activeId === exp.id}
					<!-- Expanded card -->
					<div in:scale={{ duration: 200 }} out:fade>
						<ExperienceCard {...exp} />
					</div>
				{:else}
					<!-- Preview card -->
					<div
						role="button"
						tabindex="0"
						in:fade
						out:fade
						on:click={() => (activeId = exp.id)}
						on:keydown={(e) => e.key === 'Enter' && (activeId = exp.id)}
					>
						<ExperiencePreview {...exp} />
					</div>
				{/if}
			</button>
		{/each}
	</div>

	<ExperienceModal experience={selected} onClose={() => (selected = null)} />
</section>
