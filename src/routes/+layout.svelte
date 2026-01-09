<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';

	let { children } = $props();

	let theme = $state('light');

	onMount(() => {
		const stored = localStorage.getItem('theme');

		if (stored) {
			theme = stored;
		} else {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}

		document.documentElement.classList.toggle('dark', theme === 'dark');
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', theme);
		document.documentElement.classList.toggle('dark', theme === 'dark');
	}
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class="min-h-screen bg-stone-100 text-stone-800 transition-colors dark:bg-zinc-950 dark:text-zinc-100"
>
	<nav class="flex items-center justify-between px-6 py-4">
		<button
			onclick={toggleTheme}
			class="rounded-lg border border-stone-300 px-3 py-1 text-sm dark:border-zinc-700"
		>
			{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
		</button>
	</nav>
	{@render children()}
</div>
