<script lang="ts">
	type Props = {
		href: string;
		title?: string;
	};

	let { href, title }: Props = $props();
</script>

<div
	class="hover:border-delftblue-600/50 hover:bg-delftblue-400/10 group rounded-sm border border-transparent px-2 py-2 transition-all duration-200 ease-out"
>
	<a
		{href}
		class="group-hover:text-delftblue-100 whitespace-nowrap text-lg transition-all duration-200 ease-out"
	>
		{title}
	</a>
</div>
