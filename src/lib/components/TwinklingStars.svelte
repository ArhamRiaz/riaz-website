<script lang="ts">
	import { onMount } from 'svelte';

	// Customize these settings
	// Use root-relative path for static assets (served from `/`)
	export let starImage = './single_star.png';
	export let numberOfStars = 50;
	export let minSize = 10; // Minimum star size in pixels
	export let maxSize = 30; // Maximum star size in pixels
	export let twinkleSpeed = 2; // Base twinkle animation duration in seconds

	type Star = {
		id: number;
		top: number;
		left: number;
		size: number;
		duration: number;
		delay: number;
		intensity: number;
	};

	let stars: Star[] = [];

	onMount(() => {
		// Generate stars with random positions and properties
		stars = Array.from({ length: numberOfStars }, (_, i) => ({
			id: i,
			top: Math.random() * 100, // Random vertical position (%)
			left: Math.random() * 100, // Random horizontal position (%)
			size: Math.random() * (maxSize - minSize) + minSize, // Random size
			duration: twinkleSpeed + Math.random() * 2, // Varied twinkle speed
			delay: Math.random() * 3, // Random animation delay
			intensity: Math.random() * 0.5 + 0.5 // Brightness variation (0.5-1)
		}));
	});
</script>

<div class="twinkling-stars-container">
	{#each stars as star (star.id)}
		<div
			class="twinkling-star"
			style="
				top: {star.top}%;
				left: {star.left}%;
				width: {star.size}px;
				height: {star.size}px;
				animation-duration: {star.duration}s;
				animation-delay: {star.delay}s;
				opacity: {star.intensity};
			"
		>
			<img src={starImage} alt="" />
		</div>
	{/each}
</div>

<style>
	.twinkling-stars-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		/* keep the stars behind page content */
		z-index: 0;
		overflow: hidden;
	}

	.twinkling-star {
		position: absolute;
		animation: twinkle ease-in-out infinite;
	}

	.twinkling-star img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
	}

	/* Twinkling animation - fades in and out */
	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
			filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
			filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
		}
	}

	/* Alternative: Pulse animation for a different effect */
	@keyframes pulse {
		0%,
		100% {
			opacity: 0.5;
			filter: brightness(0.8);
		}
		50% {
			opacity: 1;
			filter: brightness(1.2);
		}
	}

	/* Shimmer animation - more subtle */
	@keyframes shimmer {
		0%,
		100% {
			opacity: 0.6;
			filter: brightness(1);
		}
		25% {
			opacity: 0.8;
			filter: brightness(1.1);
		}
		75% {
			opacity: 0.9;
			filter: brightness(1.15);
		}
	}
</style>
