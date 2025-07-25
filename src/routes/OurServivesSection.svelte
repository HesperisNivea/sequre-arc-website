<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { OurServivesSectionCard } from './(app)/util';

	type Props = {
		title?: string;
		subtitle?: string;
		description?: string;
		cards?: OurServivesSectionCard[];
	};

	let { title, subtitle, description, cards } = $$props;
</script>

<section class="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 py-20">
	<div class="container relative z-10 mx-auto px-8 text-center">
		<div class="mb-16">
			<p class="text-delftblue pb-3 font-['Karla'] text-xl font-bold">{subtitle}NASZE USŁUGI</p>
			<h2 class="text-delftblue pb-6 text-4xl font-bold md:text-4xl">
				{title}
				Bogaty wybór usług IT, dostosowanych do Twoich potrzeb
			</h2>
			<p class="text-delftblue/90 font-['Karla'] text-lg">
				{description}
				Od cyberbezpieczeństwa po automatyzację procesów - oferujemy kompleksowe rozwiązania IT, które
				pomogą Twojej firmie osiągnąć sukces.
			</p>
		</div>

		<!-- Benefits Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each cards as card, index}
				<div
					class="hover:border-delftblue hover:from-delftblue/5 hover:via-aquamarine/5 hover:to-jordyblue/5 hover:shadow-delftblue/10 group
					 border-gray-200 p-8 transition-all duration-300
					hover:bg-gradient-to-br hover:shadow-lg
                    {index < 3 ? 'border-b-2' : 'border-b-2 lg:border-b-0 lg:border-t-2'}"
				>
					<div class="mb-6 flex justify-center">
						<div
							class="bg-delftblue/10 group-hover:bg-delftblue/20 rounded-full p-4 transition-colors duration-300"
						>
							{#if card.icon}
								{card.icon}
							{/if}
							<svg
								class="text-delftblue h-12 w-12"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
					</div>
					<h3 class="text-delftblue mb-4 text-center text-xl font-bold md:text-2xl">
						{card.title}
					</h3>
					<p class="text-center font-['Karla'] leading-relaxed text-gray-700">
						{card.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
