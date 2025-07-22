<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		ariaLabel?: string; // Optional ARIA label for accessibility
		onClick?: (e: Event) => void; // Optional click handler
		title?: string; // Optional text to display
		endIcon?: Snippet; // Optional icon class or SVG
		active?: boolean; // Optional prop to indicate if the button is active
		// Define any props if needed
	};

	let { ariaLabel = '', onClick, title = 'Click me', endIcon, active }: Props = $props();
</script>

<div class="group cursor-pointer">
	<button
		onclick={onClick}
		class="hover:border-aquamarine/50 flex w-full items-center justify-between rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 {active
			? 'border-aquamarine bg-aquamarine/20 text-aquamarine'
			: 'border-white/20 bg-white/5 hover:bg-white/10'}"
	>
		<span
			class="text-lg font-semibold transition-colors duration-300 {active
				? 'text-aquamarine'
				: 'group-hover:text-aquamarine text-white'}">{title}</span
		>
		{#if endIcon}
			{@render endIcon()}
		{/if}
		<svg
			class="h-5 w-5 transition-all duration-300 {active
				? 'text-aquamarine translate-x-1'
				: 'group-hover:text-aquamarine text-white/70 group-hover:translate-x-1'}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
		</svg>
	</button>
</div>
