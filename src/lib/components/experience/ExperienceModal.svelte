<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';
	import type { Experience } from './Experience';

	export let experience: Experience | null = null;
	export let onClose;
</script>

{#if experience}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<!-- Backdrop -->
		<div
			class="absolute inset-0 bg-black/50 backdrop-blur-sm"
			role="button"
			tabindex="0"
			onclick={onClose}
			onkeydown={(e) => e.key === 'Escape' && onClose()}
		></div>

		<!-- Modal -->
		<div class="relative z-10 w-full max-w-2xl px-4">
			<ExperienceCard {...experience} />

			<button
				onclick={onClose}
				class="absolute top-6 right-6 text-sm text-zinc-400 hover:text-zinc-600"
			>
				✕
			</button>
		</div>
	</div>
{/if}
