<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import VerticalTimelineSection from "$lib/components/TimeLineSections/VerticalTimelineSection.svelte";
	import CallToActionSection from "../../CallToActionSection.svelte";

      type dangerCard = {
        title: string;
        description: string;
    };

    let dangerCards: dangerCard[] = [
        {
            title: "Błędy w konfiguracji usług chmurowych",
            description: "Wiele firm przeniosło infrastrukturę do chmury, ale niepoprawna konfiguracja (np. otwarte bazy danych) może prowadzić do publicznego wycieku danych lub ataku."
        },
        {
            title: "Kradzież danych uwierzytelniających",
            description: "Loginy i hasła pracowników (często zdobyte z wcześniejszych wycieków) są wykorzystywane do przejęcia kont w systemach firmowych, szczególnie tam, gdzie nie stosuje się uwierzytelniania dwuskładnikowego (2FA)."
        },
        {
            title: "Brak aktualizacji i podatności w oprogramowaniu",
            description: "Firmy, które nie aktualizują swoich systemów, narażają się na ataki wykorzystujące znane luki bezpieczeństwa. W 2025 roku hakerzy automatyzują wykrywanie takich luk w sieciach firmowych."
        },
        {
            title: "Ransomware 2.0",
            description: "Nowe pokolenie ataków ransomware nie tylko szyfruje dane, ale też kradnie je i grozi ich ujawnieniem. Przestępcy coraz częściej stosują podwójny szantaż, co zwiększa presję na firmy - zwłaszcza te, które przechowują dane klientów."
        },
        {
            title: "Niska świadomość zagrożeń",
            description: "Niska świadomość zagrożeń i brak edukacji pracowników zwiększają ryzyko wypadków oraz strat w miejscu pracy. Dlatego ważne jest regularne szkolenie i podnoszenie świadomości bezpieczeństwa."
        }
    ];
   
    type step = {
        title: string;
        description: string;
    };

    let steps: step[] = [
        {
            title: "Konsultacje i audyt",
            description: "Zaczynamy od rozmowy i dokładnej analizy Twojego środowiska IT. Identyfikujemy słabe punkty i poznajemy Twoje potrzeby."
        },
        {
            title: "Przedstawienie ryzyk",
            description: "Przedstawiamy, co odkryliśmy - potencjalne zagrożenia, luki w zabezpieczeniach i ich możliwe konsekwencje. Wszystko w jasny i zrozumiały sposób."
        },
        {
            title: "Wdrożenie rozwiązań",
            description: "Implementujemy rekomendowane rozwiązania, które zwiększają bezpieczeństwo Twojej infrastruktury IT."
        }
    ];

</script>

<section
		class="relative max-h-[600px] bg-delftblue-700 bg-cover bg-center bg-no-repeat pb-11 text-white"
	>
		<div>
			<div class="h-[104px]"></div>
			<div class="container mx-auto px-4 py-6">
                <p class=" font-['Karla'] md:text-lg text-md font-bold pb-2">JAK SIĘ CHRONIĆ?</p>
				<h1 class="text-shadow-sm/20 max-w-3xl text-aquamarine text-5xl font-bold md:text-7xl pb-6">
					Cyberbezpieczeństwo
				</h1>
				<p class="md:w-3xl text-shadow-sm/10 text-lg md:text-xl">
					W erze cyfrowej każda organizacja, niezależnie od wielkości, narażona jest na rosnące zagrożenia cybernetyczne. Ich ignorowanie może prowadzić do poważnych strat finansowych, wizerunkowych oraz operacyjnych.
				</p>
			</div>
		</div>
	</section>
      <section class="bg-gray-50">
        <div class="container mx-auto px-4 py-8 md:py-20">
            <!-- Title Section -->
        <div class="text-center mb-6 md:mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-delftblue-800 mb-4">Na co warto zwrócić uwagę w 2025?</h2>
            <p class="text-base md:text-lg text-delftblue-800/90 max-w-3xl mx-auto">
                W dzisiejszym świecie, zagrożenia cybernetyczne są na porządku dziennym. Organizacje muszą być świadome potencjalnych ataków i odpowiednio się chronić.
            </p>
        </div>

        <!-- Timeline Section -->
        <div class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each dangerCards as card, index}
                    <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-aquamarine-500 hover:shadow-lg mb-6 transition-shadow duration-300">
                        
                        <div class="flex items-center mb-3 ">
                            <div class="w-10 h-10 min-w-[2rem] min-h-[2rem] bg-delftblue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <svg class="w-6 h-6 text-aquamarine-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <h3 class="text-xl md:text-2xl font-bold text-delftblue-800">{card.title}</h3>
                        </div>
                        <p class="text-gray-600 text-md md:text-lg leading-relaxed">
                            {card.description}
                        </p>
                    </div>
             
            {/each}
        </div>
        </div>
        
    </section>
    <section
	class="from-russianviolet to-delftblue-600 md:to-icablue-600 via-delftblue-600 relative bg-gradient-to-tr">
    <div class="container mx-auto px-4 py-8 md:py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Bezpieczeństwo z <span class="text-icablue whitespace-nowrap">Sequre Arc</span> - sprawdź jak działamy</h2>
                <p class="text-lg md:text-xl text-white pb-4">
                    Cyberbezpieczeństwo to dziś kwestia biznesowa, nie tylko technologiczna. Dlatego działamy kompleksowo &ndash; zaczynając od zrozumienia Twojej organizacji, jej celów i kontekstu operacyjnego.</p>
                <p class="text-lg md:text-xl text-white pb-4">Wdrażamy rozwiązania zgodne z globalnymi standardami i najnowszymi trendami, dbając o odporność Twojego środowiska na obecne i przyszłe zagrożenia. Nasze podejście opiera się na analizie ryzyk, mierzalnych efektach i realnym wsparciu w podejmowaniu decyzji strategicznych.</p>
                <p class="text-lg md:text-xl text-white">Bezpieczeństwo staje się przewagą &ndash; nie tylko ochroną.</p>
            </div>
            
            <div>
                {#each steps as step, index}
                    <div
					class="group {index === steps.length - 1 ? '' : 'mb-6'} rounded-2xl bg-russianviolet/10 md:bg-russianviolet/40 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-russianviolet/30"
				>
					<div class="flex items-center mb-3">
                            <div class="w-10 h-10 bg-russianviolet/50 rounded-full flex items-center justify-center mr-3">
                              <span class="text-icablue text-xl font-bold">{index + 1}</span>
                            </div>
                           <h3 class=" text-xl font-bold text-white md:text-2xl">
						{step.title}
					</h3>
                        </div>
					
					<p class=" text-white">
						{step.description}
					</p>
				</div>
                {#if index < steps.length - 1}
                <div class="justify-center my-4 hidden md:flex">
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg);">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M4.93229 18.5696C4.61987 18.2572 4.61987 17.7507 4.93229 17.4383L10.3704 12.0002L4.93583 6.56561C4.62341 6.25319 4.62341 5.74666 4.93583 5.43424C5.24825 5.12182 5.75478 5.12182 6.0672 5.43424L12.0674 11.4345C12.2175 11.5845 12.3018 11.788 12.3018 12.0002C12.3018 12.2123 12.2175 12.4158 12.0674 12.5659L6.06366 18.5696C5.75124 18.8821 5.24471 18.8821 4.93229 18.5696Z" fill="#a8e9e8" class="my-path"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9323 18.5696C11.6199 18.2572 11.6199 17.7507 11.9323 17.4383L17.3704 12.0002L11.9358 6.56561C11.6234 6.25319 11.6234 5.74666 11.9358 5.43424C12.2483 5.12182 12.7548 5.12182 13.0672 5.43424L19.0674 11.4345C19.2175 11.5845 19.3018 11.788 19.3018 12.0002C19.3018 12.2123 19.2175 12.4158 19.0674 12.5659L13.0637 18.5696C12.7512 18.8821 12.2447 18.8821 11.9323 18.5696Z" fill="#a8e9e8" class="my-path"></path>
</svg>
                </div>
                {/if}
                {/each}
            </div>
        </div>
    </div>
</section>
<CallToActionSection />

