<script lang="ts">
	import TransparentButton from '../../../routes/TransparentButton.svelte';
	import SubNavbar from '../SubNavMenu/SubNavbar.svelte';
	import NavbarLink from './NavbarLink.svelte';
	import { onMount } from 'svelte';

	let mobileMenuOpen = $state(false);
	let activeDropdown = $state<string | null>(null);
	let scrollY = $state(0);
	let navbarOpacity = $state(0.2);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function toggleDropdown(dropdown: string) {
		activeDropdown = activeDropdown === dropdown ? null : dropdown;
	}

	function closeDropdowns() {
		activeDropdown = null;
	}

	function updateNavbarOpacity() {
		// Calculate opacity based on scroll position
		// At scroll 0: opacity 0.2 (20%)
		// At scroll 100px+: opacity 0.9 (90%)
		const maxScroll = 100;
		const minOpacity = 0.2;
		const maxOpacity = 0.9;

		const progress = Math.min(scrollY / maxScroll, 1);
		navbarOpacity = minOpacity + (maxOpacity - minOpacity) * progress;
	}

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
			updateNavbarOpacity();
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
	style="background-color: rgba(49, 59, 114, {navbarOpacity})"
>
	<div class="container mx-auto px-4 py-6">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<img src="/images/Logo_White_PNG.png" alt="Logo" class="h-14 w-auto" />
			<!-- Desktop Navigation -->
			<nav class="hidden lg:block">
				<ul class="flex items-center justify-center space-x-8 font-semibold text-white">
					<li class="">
						<NavbarLink href="/" title="Strona Główna" />
					</li>
					<li>
						<NavbarLink href="/about" title="O nas" />
					</li>
					<li class="group relative">
						<button
							class="hover:border-delftblue-600/50 hover:bg-delftblue-400/10 cursor-pointer rounded-sm border border-transparent px-2 py-2 text-lg transition-all duration-200 ease-out"
							onclick={() => toggleDropdown('products')}
						>
							Usługi <img
								src="/icons/chevron-down.svg"
								alt="Dropdown Arrow"
								class="inline h-4 w-4 pl-1 brightness-0 invert saturate-0 filter"
								style="vertical-align: middle;"
							/>
						</button>
						<div
							class="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 transform opacity-0 transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100 {activeDropdown ===
							'products'
								? 'visible opacity-100'
								: ''}"
						>
							<div class="mt-3 rounded-xl bg-white p-6 shadow-xl">
								<div class="grid grid-cols-2 gap-6">
									<SubNavbar
										title="Integracje"
										items={[
											{
												title: 'Cyberbezpieczeństwo',
												description: 'Zabezpieczamy swoje dane i systemy'
											},
											{
												title: 'Audyt',
												description: 'Przeprowadzamy szczegółowy audyt bezpieczeństwa'
											},
											{ title: 'M365', description: 'Wprowadzamy M365' },
											{ title: 'Google Workspace', description: 'Wprowadzamy Google Workspace' }
										]}
									/>
									<SubNavbar
										title="Usługi"
										items={[
											{ title: 'Szkolenia', description: 'Organizuj interaktywne szkolenia' },
											{ title: 'Webinary', description: 'Prowadź transmisje na żywo' },
											{ title: 'Konsultacje', description: 'Oferuj profesjonalne doradztwo' }
										]}
									/>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</nav>

			<!-- Kontakt (Desktop) -->
			<div class="hidden lg:block">
				<TransparentButton title="Kontakt" size="small"></TransparentButton>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="flex h-8 w-8 flex-col items-center justify-center text-white lg:hidden"
				onclick={toggleMobileMenu}
				aria-label="Toggle mobile menu"
			>
				<span class="sr-only">Open main menu</span>
				<div
					class="mb-1 h-0.5 w-6 bg-white transition-all duration-300 {mobileMenuOpen
						? 'translate-y-1.5 rotate-45'
						: ''}"
				></div>
				<div
					class="mb-1 h-0.5 w-6 bg-white transition-all duration-300 {mobileMenuOpen
						? 'opacity-0'
						: 'opacity-100'}"
				></div>
				<div
					class="h-0.5 w-6 bg-white transition-all duration-300 {mobileMenuOpen
						? '-translate-y-1.5 -rotate-45'
						: ''}"
				></div>
			</button>
		</div>

		<!-- Mobile Navigation -->
		<div class="lg:hidden {mobileMenuOpen ? 'block' : 'hidden'} mt-4">
			<nav class="bg-delftblue rounded-lg p-4">
				<ul class="space-y-2">
					<li>
						<a
							href="#"
							class="hover:bg-delftblue-600 block rounded px-3 py-2 text-white transition-colors duration-200"
							>Strona Główna</a
						>
					</li>
					<li>
						<button
							class="hover:hover:bg-delftblue-600 w-full rounded px-3 py-2 text-left text-white transition-colors duration-200"
							onclick={() => toggleDropdown('mobile-products')}
						>
							Usługi
							<img
								src="/icons/chevron-down.svg"
								alt="Dropdown Arrow"
								class="inline h-4 w-4 pl-1 brightness-0 invert saturate-0 filter"
								style="vertical-align: middle;"
							/>
						</button>
						{#if activeDropdown === 'mobile-products'}
							<div class="ml-4 mt-2 space-y-2">
								<div class="text-sm font-medium text-gray-300">The Suite</div>
								<a
									href="#"
									class="block text-gray-400 transition-colors duration-200 hover:text-white"
									>Course Editor</a
								>
								<a
									href="#"
									class="block text-gray-400 transition-colors duration-200 hover:text-white"
									>Accept payments</a
								>
								<a
									href="#"
									class="block text-gray-400 transition-colors duration-200 hover:text-white"
									>Closed Captioning</a
								>
								<div class="mt-3 text-sm font-medium text-gray-300">Extensions</div>
								<a
									href="#"
									class="block text-gray-400 transition-colors duration-200 hover:text-white"
									>Plugins</a
								>
								<a
									href="#"
									class="block text-gray-400 transition-colors duration-200 hover:text-white"
									>Batch uploads</a
								>
								<a
									href="#"
									class="block text-gray-400 transition-colors duration-200 hover:text-white"
									>Social sharing</a
								>
							</div>
						{/if}
					</li>
					<li>
						<a
							href="#"
							class="hover:hover:bg-delftblue-600 block whitespace-nowrap rounded px-3 py-2 text-white transition-colors duration-200"
							>O nas</a
						>
					</li>

					<li>
						<a
							href="#"
							class="hover:hover:bg-delftblue-600 block whitespace-nowrap rounded px-3 py-2 text-white transition-colors duration-200"
							>Kontakt</a
						>
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<!-- Overlay for closing dropdowns -->
	{#if activeDropdown}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="fixed inset-0 z-40" onclick={closeDropdowns}></div>
	{/if}
</header>
