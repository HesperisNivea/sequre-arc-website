<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href?: string; // Optional link to navigate to
		ariaLabel?: string; // Optional ARIA label for accessibility
		onClick?: (e: Event) => void; // Optional click handler
		title?: string; // Optional text to display
		endIcon?: Snippet; // Optional icon class or SVG
		active?: boolean;
		size?: 'small' | 'medium' | 'large'; // Optional prop to indicate the button size
		// Define any props if needed
	};

	let {
		ariaLabel = '',
		onClick,
		title = 'Click me',
		endIcon,
		active,
		size = 'medium',
		href = undefined,
	}: Props = $props();
</script>

<div class="group cursor-pointer">
	{#if href} 
		<a
			{href}
			aria-label={ariaLabel}
		class="hover:border-aquamarine/50 flex w-full items-center justify-between rounded-2xl border backdrop-blur-sm transition-all duration-300
		{size === 'small'
			? 'px-4 py-2 text-sm'
			: size === 'large'
				? 'p-6 text-lg'
				: ' p-6 text-base'} {active
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
		</a>
	{:else}
	<button
		onclick={onClick}
		class="hover:border-aquamarine/50 flex w-full items-center justify-between rounded-2xl border backdrop-blur-sm transition-all duration-300
		{size === 'small'
			? 'px-4 py-2 text-sm'
			: size === 'large'
				? 'p-6 text-lg'
				: ' p-6 text-base'} {active
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
	{/if}

	
</div>
