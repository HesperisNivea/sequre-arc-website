<script lang="ts">
	type Props = {
		title: string | null;
		items: Array<{
			title: string | null;
			description: string | null;
			href?: string;
		}>;
	};

	let { title, items }: Props = $props();
</script>

<div>
	{#if title}
		<p class="text-[13px] font-medium uppercase tracking-wider text-gray-500">
			{title}
		</p>
	{/if}

	<ul class="mt-3 text-[15px]">
		{#each items as { title, description, href }}
			<li>
				<a
					href="{href || '#'}"
					class="-mx-2 block rounded-lg p-2 font-semibold text-gray-800 transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-pink-50 hover:text-indigo-600"
				>
					{title}
					<p class="font-normal text-gray-500">{description}</p>
				</a>
			</li>
		{/each}
	</ul>
</div>
