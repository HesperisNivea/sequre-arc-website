<script>
	import CallToActionSection from './CallToActionSection.svelte';
	import OurServivesSection from './OurServivesSection.svelte';
	import TransparentButton from '../lib/components/TransparentButton.svelte';
	import { cards } from './(app)/util';
	import Footer from '../lib/components/Footer.svelte';

	let buttons = [
		{
			ariaLabel: 'Cyberbezpieczeństwo',
			onClick: () => {},
			title: 'Cyberbezpieczeństwo',
			active: false,
			cardTitle: 'Cyberbezpieczeństwo',
			cardContent:
				'Zapewniamy najwyższy poziom cyberbezpieczeństwa, chroniąc Twoje dane przed zagrożeniami cyfrowego świata.',
			cardImage: '/images/max-petrunin-8wLRzTPtwAA-unsplash.jpg'
		},
		{
			ariaLabel: 'Infrastruktura IT dla biznesu',
			onClick: () => {},
			title: 'Infrastruktura IT dla biznesu',
			active: false,
			cardTitle: 'Infrastruktura IT dla biznesu',
			cardContent:
				'Wdrażamy i dostosowujemy środowisko IT dla Twojej firmy. Wykorzystaj pełny potencjał Microsoft 365 lub Google Workspace.',
			cardImage: '/images/shubham-dhage-cIwzPYs-_Mk-unsplash.jpg'
		},
		{
			ariaLabel: 'Automatyzacja i AI',
			onClick: () => {},
			title: 'Automatyzacja & AI',
			active: false,
			cardTitle: 'Automatyzacja & AI',
			cardContent:
				'Pomagamy uwolnić pełny potencjał AI dla Twojej firmy i wprowadzamy automatymtayzacje procesów. Przyspiesz procesy i zyskaj przewagę nad konkurencją.',
			cardImage: 'images/logan-voss-clMol3QrDzU-unsplash.jpg'
		}
	];

	let activeCardIndex = null; // Default to the first card

	let activeCardContent = {
		title: 'Cyberbezpieczeństwo',
		content:
			'Zapewniamy najwyższy poziom cyberbezpieczeństwa, chroniąc Twoje dane przed zagrożeniami cyfrowego świata.',
		image: '/images/max-petrunin-8wLRzTPtwAA-unsplash.jpg'
	};

	const changeActiveCard = (index) => {
		activeCardIndex = index;

		activeCardContent = {
			title: buttons[index].cardTitle,
			content: buttons[index].cardContent,
			image: buttons[index].cardImage
		};
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
					<div class="mb-6">
						<p class="text-delftblue pb-3 font-['Karla'] text-lg font-bold">CO NAS WYRÓŻNIA</p>
						<h2 class="text-delftblue text-4xl font-bold md:text-4xl">Nasze wartości</h2>
					</div>
					<!-- <h2 class="text-delftblue mb-4 text-4xl font-bold md:text-5xl">Dlaczego my?</h2> -->
					<div
						class="from-aquamarine to-delftblue w-50 mx-auto h-1 rounded-full bg-gradient-to-r"
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
								<img src="/images/square..png" alt="Bezpieczeństwo" class="h-25" />
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
								<img src="/images/hex2.png" alt="Elastyczność" class="h-25" />
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
									class="h-25"
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
	<section class="relative bg-gradient-to-tr from-gray-50 via-white to-blue-50 px-4 py-20">
		<!-- Background decorative elements -->
		<div class="absolute inset-0 overflow-hidden">
			<div
				class="bg-aquamarine/10 absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
			></div>
			<div class="bg-delftblue/10 absolute -left-10 -top-10 h-32 w-32 rounded-full blur-2xl"></div>
		</div>

		<div
			class="from-delftblue-600 via-delftblue-700 to-delftblue-900 container relative z-10 mx-auto overflow-hidden rounded-lg bg-gradient-to-br md:rounded-xl"
		>
			<div
				class="grid grid-cols-1 items-stretch gap-0 p-4 md:p-6 lg:grid-cols-2 lg:gap-12 lg:px-11"
			>
				<!-- Left side - Expertise categories -->
				<div class="space-y-6 py-6 md:px-4 md:py-11 lg:space-y-8">
					<div class="mb-8 md:mb-12">
						<h2 class="text-aquamarine mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Nasze kompetencje
						</h2>
						<div
							class="from-aquamarine h-1 w-20 rounded-full bg-gradient-to-r to-white md:w-24"
						></div>
					</div>
					<div class="space-y-3 md:space-y-4">
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
				<div class="py-3 md:py-8">
					<!-- Main content card -->
					<div class="bg-aquamarine-100 h-full min-h-[400px] rounded-lg p-6 shadow-2xl md:p-8">
						<!-- Content -->
						<div class="">
							<div class="mb-4 overflow-hidden rounded-lg md:mb-6">
								<img
									class="h-40 w-full object-cover md:h-60"
									src={activeCardContent.image}
									alt="Kompetencje"
								/>
							</div>

							<h3 class="text-delftblue mb-3 text-xl font-bold md:mb-4 md:text-2xl">
								{activeCardContent.title}
							</h3>
							<p class="text-delftblue font-['Karla'] text-base leading-relaxed md:text-lg">
								{activeCardContent.content}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section
		class="from-aquamarine-500 via-aquamarine-600 to-delftblue-500 relative bg-gradient-to-tr px-4 py-20"
	>
		<div class="container relative z-10 mx-auto">
			<!-- Benefits Grid -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<!-- Benefit 1 - Result -->
				<div class="mb-16 pe-6 md:col-span-2">
					<h2 class="pb-6 text-4xl font-bold text-white md:text-4xl">
						CO ZYSKUJESZ, <br /> DZIEKI WSPÓŁPRACY Z NAMI
					</h2>
					<p class="font-['Karla'] text-lg text-white/90">
						Od cyberbezpieczeństwa po automatyzację procesów - oferujemy kompleksowe rozwiązania IT,
						które pomogą Twojej firmie osiągnąć sukces.
					</p>
				</div>
				<div
					class="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
				>
					<div class="mb-6 flex justify-center">
						<div class="rounded-full bg-white/20 p-4">
							<svg
								class="h-12 w-12 text-white"
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
					<h3 class="mb-4 text-center text-xl font-bold text-white md:text-2xl">
						Środowisko szyte na miarę
					</h3>
					<p class="text-center font-['Karla'] leading-relaxed text-white/90">
						Accurate results are our top priority, ensuring you always have reliable information at
						your fingertips.
					</p>
				</div>

				<!-- Benefit 2 - Quality -->
				<div
					class="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
				>
					<div class="mb-6 flex justify-center">
						<div class="rounded-full bg-white/20 p-4">
							<svg
								class="h-12 w-12 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V18m-7-8a2 2 0 01-2-2V6a2 2 0 012-2h2.343M11 7L9 5l2-2"
								/>
							</svg>
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold text-white md:text-2xl">
						Zabezpieczone dane
					</h3>
					<p class="text-center font-['Karla'] leading-relaxed text-white/90">
						We are committed to providing high-quality products and services that exceed your
						expectations.
					</p>
				</div>

				<!-- Benefit 3 - Product -->
				<div
					class="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
				>
					<div class="mb-6 flex justify-center">
						<div class="rounded-full bg-white/20 p-4">
							<svg
								class="h-12 w-12 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
								/>
							</svg>
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold text-white md:text-2xl">
						Odporność na cyberzagrożenia
					</h3>
					<p class="text-center font-['Karla'] leading-relaxed text-white/90">
						Experience the difference of our feature-rich product that offers everything you
						requires and many more.
					</p>
				</div>

				<!-- Benefit 4 - Sales -->
				<div
					class="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
				>
					<div class="mb-6 flex justify-center">
						<div class="rounded-full bg-white/20 p-4">
							<svg
								class="h-12 w-12 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
								/>
							</svg>
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold text-white md:text-2xl">
						Optymalizacja kosztów
					</h3>
					<p class="text-center font-['Karla'] leading-relaxed text-white/90">
						Experience the difference of our personalized sales approach, where you are always our
						top priority.
					</p>
				</div>

				<!-- Benefit 5 - Onboarding -->
				<div
					class="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
				>
					<div class="mb-6 flex justify-center">
						<div class="rounded-full bg-white/20 p-4">
							<svg
								class="h-12 w-12 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold text-white md:text-2xl">
						Zwiększona produktywność
					</h3>
					<p class="text-center font-['Karla'] leading-relaxed text-white/90">
						Our onboarding process is designed to be simple and intuitive, so you can start using
						our platform right away.
					</p>
				</div>

				<!-- Benefit 6 - Support -->
				<div
					class="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
				>
					<div class="mb-6 flex justify-center">
						<div class="rounded-full bg-white/20 p-4">
							<svg
								class="h-12 w-12 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
								/>
							</svg>
						</div>
					</div>
					<h3 class="mb-4 text-center text-xl font-bold text-white md:text-2xl">
						Łatwe skalowanie
					</h3>
					<p class="text-center font-['Karla'] leading-relaxed text-white/90">
						Our commitment to exceptional support ensures that you receive the assistance you need,
						whenever you need it.
					</p>
				</div>
			</div>
		</div>
	</section>
	<OurServivesSection {cards}></OurServivesSection>

	<CallToActionSection />
</main>
<Footer />
