<script lang="ts">
	import SubNavbar from '../SubNavMenu/SubNavbar.svelte';
	import NavbarLink from './NavbarLink.svelte';

	let mobileMenuOpen = $state(false);
	let activeDropdown = $state<string | null>(null);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function toggleDropdown(dropdown: string) {
		activeDropdown = activeDropdown === dropdown ? null : dropdown;
	}

	function closeDropdowns() {
		activeDropdown = null;
	}
</script>

<header class="relative bg-gray-900/50">
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
							class="cursor-pointer text-lg transition-colors duration-200 hover:text-gray-300"
							onclick={() => toggleDropdown('products')}
						>
							Usługi
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
				<a href="#" class="text-lg transition-colors duration-200 hover:text-gray-300">Kontakt</a>
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
			<nav class="rounded-lg bg-gray-800 p-4">
				<ul class="space-y-2">
					<li>
						<button
							class="w-full rounded px-3 py-2 text-left text-white transition-colors duration-200 hover:bg-gray-700"
							onclick={() => toggleDropdown('mobile-products')}
						>
							Usługi
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
							class="block whitespace-nowrap rounded px-3 py-2 text-white transition-colors duration-200 hover:bg-gray-700"
							>O nas</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block rounded px-3 py-2 text-white transition-colors duration-200 hover:bg-gray-700"
							>Strona Główna</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block whitespace-nowrap rounded px-3 py-2 text-white transition-colors duration-200 hover:bg-gray-700"
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
