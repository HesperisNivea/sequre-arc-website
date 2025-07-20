<script lang="ts">
	type Props = {
		href: string;
		title?: string;
	};

	let { href, title }: Props = $props();
</script>

<div
	class="group rounded-sm px-2 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:border-indigo-400 hover:bg-indigo-600/25 hover:shadow-lg"
>
	<a
		{href}
		class="whitespace-nowrap text-lg transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-indigo-300"
	>
		{title}
	</a>
</div>
