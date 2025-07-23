<section
	class="from-russianviolet to-icablue via-delftblue-400 relative overflow-hidden bg-gradient-to-br px-4 py-20 lg:py-32"
>
	<!-- Background decorative elements -->
	<div class="absolute inset-0 overflow-hidden">
		<!-- Floating hexagons on the right side -->
		<div class="top-15 absolute right-10 animate-pulse">
			<svg
				width="120"
				height="120"
				viewBox="0 0 120 120"
				class=" text-white/40"
				style="animation: float 4s ease-in-out infinite;"
			>
				<polygon
					points="60,10 100,35 100,85 60,110 20,85 20,35"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
				/>
			</svg>
		</div>

		<div class="absolute right-40 top-40 animate-pulse" style="animation-delay: 1s;">
			<svg
				width="90"
				height="90"
				viewBox="0 0 90 90"
				class="text-white/35"
				style="animation: float 4s ease-in-out infinite;"
			>
				<polygon
					points="45,8 75,27 75,65 45,82 15,65 15,27"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
				/>
			</svg>
		</div>

		<div class="absolute right-20 top-72 animate-pulse" style="animation-delay: 2s;">
			<svg
				width="150"
				height="150"
				viewBox="0 0 150 150"
				class="text-white/25"
				style="animation: float 5s ease-in-out infinite reverse;"
			>
				<polygon
					points="75,12 125,43 125,105 75,137 25,105 25,43"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
				/>
			</svg>
		</div>

		<div class="absolute right-8 top-96 animate-pulse" style="animation-delay: 0.5s;">
			<svg
				width="80"
				height="80"
				viewBox="0 0 80 80"
				class="text-white/45"
				style="animation: float 3.5s ease-in-out infinite;"
			>
				<polygon
					points="40,7 67,23 67,57 40,73 13,57 13,23"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
				/>
			</svg>
		</div>

		<div class="absolute right-60 top-32 animate-pulse" style="animation-delay: 1.5s;">
			<svg
				width="65"
				height="65"
				viewBox="0 0 65 65"
				class="text-white/50"
				style="animation: float 6s ease-in-out infinite;"
			>
				<polygon
					points="32.5,5 55,18 55,47 32.5,60 10,47 10,18"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
				/>
			</svg>
		</div>

		<!-- Additional larger hexagons for more prominence -->
		<div class="absolute right-32 top-80 animate-pulse" style="animation-delay: 3s;">
			<svg
				width="110"
				height="110"
				viewBox="0 0 110 110"
				class="text-white/30"
				style="animation: float 7s ease-in-out infinite;"
			>
				<polygon
					points="55,9 92,32 92,78 55,101 18,78 18,32"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
				/>
			</svg>
		</div>
	</div>

	<div class="container relative z-10 mx-auto">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<!-- Left side - Content -->
			<div class="space-y-6">
				<div>
					<!-- <p class="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
						DLA FIRM SPECJALIZUJĄCYCH SIĘ W CHMURZE
					</p> -->
					<h2 class="text-4xl font-[1000] leading-tight text-white md:text-5xl lg:text-6xl">
						Gotowy na
						<span class="block">transformację cyfrową?</span>
					</h2>
				</div>
				<p class="font-['Karla'] text-lg leading-relaxed text-white/90 md:text-xl">
					Porozmawiaj z naszymi ekspertami i odkryj możliwości dla Twojej firmy. Razem stworzymy
					bezpieczne i nowoczesne środowisko IT.
				</p>
			</div>

			<!-- Right side - CTA Button -->
			<div class="flex justify-start">
				<button
					class="bg-russianviolet hover:border-russianviolet hover:text-russianviolet hover:shadow-1xl group flex items-center gap-3 rounded-full px-8 py-4 font-['Karla'] text-lg text-white shadow-xl transition-all duration-100 hover:border-2 hover:bg-white/10"
				>
					Skontaktuj się z nami
					<svg
						class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(180deg);
		}
	}
</style>
