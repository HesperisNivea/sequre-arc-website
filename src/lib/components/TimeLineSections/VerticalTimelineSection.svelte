<script lang="ts">
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

</script>

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
        <div class="relative  mx-auto">
            <!-- Central Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-aquamarine-400 hidden md:block"></div>
            
            {#each dangerCards as card, index}
            <div class="relative flex items-center mb-6 md:mb-0 {index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
                <!-- Timeline Icon -->
                <div class="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] bg-delftblue-700 rounded-full items-center justify-center z-10 hidden md:flex flex-shrink-0">
                    <svg class="w-5 h-5 text-aquamarine-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/>
                    </svg>
                </div>

                <!-- Card Content -->
                <div class="w-full md:w-6/13 {index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}">
                    <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-aquamarine-500 hover:shadow-lg transition-shadow duration-300">
                        <!-- Mobile Icon -->
                        <div class="flex items-center mb-3 md:hidden">
                            <div class="w-8 h-8 min-w-[2rem] min-h-[2rem] bg-delftblue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <svg class="w-4 h-4 text-aquamarine-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-delftblue-800">{card.title}</h3>
                        </div>
                        
                        <!-- Desktop Title -->
                        <h3 class="text-xl font-bold text-delftblue-800 mb-2 hidden md:block">{card.title}</h3>

                        <p class="text-gray-600 text-md md:text-lg leading-relaxed">
                            {card.description}
                        </p>
                    </div>
                </div>
            </div>
            {/each}
        </div>
        </div>
        
    </section>

  