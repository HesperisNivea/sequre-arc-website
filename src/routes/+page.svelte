<script>
	import TransparentButton from './TransparentButton.svelte';

	let buttons = [
		{
			ariaLabel: 'Cyberbezpieczeństwo',
			onClick: () => {},
			title: 'Cyberbezpieczeństwo',
			active: false,
			cardTitle: '',
			cardContent: '',
			cardImage: ''
		},
		{
			ariaLabel: 'Infrastruktura IT dla biznesu',
			onClick: () => {},
			title: 'Infrastruktura IT dla biznesu',
			active: false,
			cardTitle: '',
			cardContent: '',
			cardImage: ''
		},
		{
			ariaLabel: 'Automatyzacja i AI',
			onClick: () => {},
			title: 'Automatyzacja & AI',
			active: false,
			cardTitle: '',
			cardContent: '',
			cardImage: ''
		}
	];

	let activeCardIndex = $state(null); // Default to the first card
	let activeCardContent = $state({
		title: 'Cyberbezpieczeństwo',
		content:
			'Zapewniamy najwyższy poziom cyberbezpieczeństwa, chroniąc Twoje dane przed zagrożeniami cyfrowego świata.'
	});

	const changeActiveCard = (index) => {
		activeCardIndex = index;
	};
</script>

<main class="relative">
	<section
		class="relative max-h-[600px] bg-cover bg-center bg-no-repeat pb-11 text-white"
		style="background-image: url('/images/Backspash.png')"
	>
		<div>
			<div class="h-[104px]"></div>
			<div class="container mx-auto space-y-14 px-4 py-6">
				<h1 class="text-shadow-sm/20 max-w-3xl text-5xl font-bold md:text-7xl">
					Specjalizujemy się w ochronie <span class="text-aquamarine">danych</span> oraz nowoczenym środowisku
					pracy.
				</h1>
				<p class="md:w-3xl text-shadow-sm/40 text-lg md:text-2xl">
					Nasza misja to zapewnienie najwyższego poziomu bezpieczeństwa danych dla Twojego biznesu.
				</p>
			</div>
		</div>
	</section>
	<section class="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 py-20">
		<div class="container mx-auto">
			<!-- Background decorative elements -->
			<div class="absolute inset-0 overflow-hidden">
				<div
					class="bg-aquamarine/10 absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
				></div>
				<div
					class="bg-delftblue/10 absolute -bottom-10 -left-10 h-32 w-32 rounded-full blur-2xl"
				></div>
			</div>

			<div class="relative z-10">
				<div class="mb-16 text-center">
					<h2 class="text-delftblue mb-4 text-4xl font-bold md:text-5xl">Dlaczego my?</h2>
					<div
						class="from-aquamarine to-delftblue mx-auto h-1 w-24 rounded-full bg-gradient-to-r"
					></div>
				</div>

				<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div
						class="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div
							class="to-aquamarine/5 absolute inset-0 bg-gradient-to-br from-transparent via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div class="relative z-10">
							<div class="mb-6 flex items-center">
								<img src="/images/square..png" alt="Bezpieczeństwo" class="h-16" />
							</div>
							<h3
								class="text-delftblue group-hover:text-aquamarine mb-3 text-xl font-bold transition-colors duration-300"
							>
								Bezpieczeństwo
							</h3>
							<p class="font-['Karla'] leading-relaxed text-gray-600">
								Działamy zawsze według najnowszych praktyk cyberbezpieczeństwa.
							</p>
						</div>
						<div
							class="from-aquamarine to-delftblue absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full"
						></div>
					</div>

					<div
						class="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div
							class="to-delftblue/5 absolute inset-0 bg-gradient-to-br from-transparent via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div class="relative z-10">
							<div class="mb-6 flex items-center">
								<img src="/images/hex2.png" alt="Elastyczność" class="h-16" />
							</div>
							<h3
								class="text-delftblue group-hover:text-aquamarine mb-3 text-xl font-bold transition-colors duration-300"
							>
								Elastyczność
							</h3>
							<p class="font-['Karla'] leading-relaxed text-gray-600">
								Przygotowujemy infrastrukturę IT szytą na miarę każdego biznesu.
							</p>
						</div>
						<div
							class="from-aquamarine to-delftblue absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full"
						></div>
					</div>

					<div
						class="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div
							class="to-aquamarine/5 absolute inset-0 bg-gradient-to-br from-transparent via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
						<div class="relative z-10">
							<div class="mb-6 flex items-center">
								<img
									src="/images/checkIfsquareshasabackground.png"
									alt="Doświadczenie"
									class="h-16"
								/>
							</div>
							<h3
								class="text-delftblue group-hover:text-aquamarine mb-3 text-xl font-bold transition-colors duration-300"
							>
								Doświadczenie
							</h3>
							<p class="font-['Karla'] leading-relaxed text-gray-600">
								Nasz zespół posiada 10 lat doświadczenia w branży IT, a w tym cybersecurity.
							</p>
						</div>
						<div
							class="from-aquamarine to-delftblue absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full"
						></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="px-4 py-20">
		<!-- Background decorative elements -->
		<div class="absolute inset-0 overflow-hidden">
			<div class="bg-aquamarine/10 absolute right-20 top-10 h-32 w-32 rounded-full blur-2xl"></div>
			<div class="absolute bottom-20 left-10 h-24 w-24 rounded-full bg-white/5 blur-xl"></div>
			<div class="bg-aquamarine/5 absolute right-1/3 top-1/2 h-40 w-40 rounded-full blur-3xl"></div>
		</div>

		<div
			class="from-delftblue-600 via-delftblue-700 to-delftblue-900 container relative z-10 mx-auto overflow-hidden rounded-sm bg-gradient-to-br"
		>
			<div class="grid grid-cols-1 items-center gap-12 px-11 py-6 lg:grid-cols-2">
				<!-- Left side - Expertise categories -->
				<div class="space-y-8 px-4 py-11">
					<div class="mb-12">
						<h2 class="text-aquamarine mb-4 text-4xl font-bold md:text-5xl">Nasze kompetencje</h2>
						<div class="from-aquamarine h-1 w-24 rounded-full bg-gradient-to-r to-white"></div>
					</div>
					<div class="space-y-4">
						{#each buttons as button, index}
							<TransparentButton
								ariaLabel={button.ariaLabel}
								onClick={() => changeActiveCard(index)}
								title={button.title}
								active={activeCardIndex === index}
							></TransparentButton>
						{/each}
					</div>
				</div>

				<!-- Right side - Content area with floating elements -->
				<div class="h-full py-8">
					<!-- Main content card -->
					<div class="from-aquamarine/70 to-aquamarine h-full rounded-sm bg-gradient-to-br p-8">
						<!-- Content -->
						<div class="">
							<image class=" w-32 pb-4" src="/images/checkIfsquareshasabackground.png" />

							<h3 class="text-delftblue mb-4 text-2xl font-bold">{activeCardContent.title}</h3>
							<p class="text-delftblue/90 font-['Karla'] leading-relaxed">
								{activeCardContent.content}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
