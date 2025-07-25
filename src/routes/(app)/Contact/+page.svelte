
<section
		class="relative max-h-[600px] bg-delftblue  bg-cover bg-center bg-no-repeat text-white"
	>
		<div>
			<div class="h-[104px]"></div>
			<div class="container mx-auto px-4 py-6">
                <p class=" font-['Karla'] md:text-lg text-md uppercase font-bold pb-2">&nbsp;</p>
				<h1 class="text-shadow-sm/20 max-w-3xl text-white text-4xl font-bold md:text-5xl pb-6">
					Skontaktuj się z nami
				</h1>
				<p class="md:w-3xl text-shadow-sm/10 text-white text-lg md:text-xl">
					
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices pellentesque metus, non faucibus odio sollicitudin id. Cras sollicitudin turpis.
				</p>
			</div>
		</div>
</section>
<section>

    <div>
        <div class="absolute h-64 w-full bg-delftblue"></div>
    </div>
    <div class="relative z-1 container mx-auto px-4 py-8">
        <div class="bg-delftblue rounded-lg">
            </div>
            <div class="bg-gray-100 px-8 py-11 rounded-lg shadow-2xl">
                <h3 class="text-3xl text-center font-bold text-delftblue-700 mb-11">Wyślij nam wiadomość</h3>
                <form action="/submit-contact" method="POST" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div class="space-y-4">
                            <div>
                            <label for="name" class="text-md font-semibold text-delftblue-700 py-2">Imię i Nazwisko <span class="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Podaj Imię i Nazwisko" 
                            required 
                            class="w-full p-3 border-2 border-delftblue-200 rounded-xl text-delftblue-800 bg-gray-100 focus:border-delftblue-500 focus:outline-none focus:ring-2 focus:ring-delftblue-200 transition-all" 
                        />
                            </div>
                        <div>  
                            <label for="email" class="text-md font-semibold text-delftblue-700 py-2">Email <span class="text-red-500">*</span></label>
                            <input 
                        type="email" 
                        name="email" 
                        placeholder="Podaj swój email" 
                        required 
                        class="w-full p-3 border-2 border-delftblue-200 rounded-xl text-delftblue-800 bg-gray-100 focus:border-delftblue-500 focus:outline-none focus:ring-2 focus:ring-delftblue-200 transition-all" 
                    /></div>
                   
                        </div>
                        <div class="space-y-4">
                             <div>
                        <label for="NIP" class="text-md font-semibold text-delftblue-700 py-2">NIP Firmy</label>
                        <input 
                        type="text" 
                        name="NIP" 
                        placeholder="Podaj NIP twojej firmy" 
                        required 
                        class="w-full p-3 border-2 border-delftblue-200 rounded-xl text-delftblue-800 bg-gray-100 focus:border-delftblue-500 focus:outline-none focus:ring-2 focus:ring-delftblue-200 transition-all"
                    />
                    </div>
                    
                     
                   </div>
                    </div>
                   <div>
                           <label for="message" class="text-md font-semibold text-delftblue-700 py-2">Wiadomość <span class="text-red-500">*</span></label> 
                     <textarea 
                        name="message" 
                        placeholder="Powiedz nam, jak możemy Ci pomóc?" 
                        required 
                        rows="4"
                        class="w-full p-3 border-2 border-delftblue-200 rounded-xl text-delftblue-800 bg-gray-100 focus:border-delftblue-500 focus:outline-none focus:ring-2 focus:ring-delftblue-200 transition-all"
                    ></textarea>
                    </div>
                   
                    <button 
                        type="submit" 
                        class="w-full bg-delftblue-700 text-white px-6 py-4 rounded-lg hover:bg-delftblue-600 focus:bg-delftblue-800 transition-colors font-semibold text-lg shadow-lg"
                    >
                        Wyślij wiadomość
                    </button>
                    <p class="text-sm text-gray-500 mt-2">
                        Administratorem danych osobowych jest Sequre Arc sp. z o.o. z siedzibą w Zielonce (KRS: 0001172311).
                          Twoje dane osobowe będą przetwarzane w celu odpowiedzi na Twój kontakt.
                            Masz prawo dostępu do danych, żądania ich sprostowania, usunięcia,
                             ograniczenia przetwarzania oraz wniesienia sprzeciwu wobec przetwarzania danych.
                              Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
                               Więcej informacji znajdziesz w <a href="/privacy-policy" class="underline hover:decoration-2 hover:decoration-icablue">polityce prywatności</a>.
                    </p>
                </form>
            </div>

            
        </div>
   
</section>

