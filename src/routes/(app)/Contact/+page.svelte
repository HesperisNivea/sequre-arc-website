<script lang="ts">
    import { enhance, applyAction } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
   
    let error = $state(false);
    let loading = $state(false);
    let errors = $state<Record<string, string[]>>();
    let success = $state(false);


    const handleSubmit = async ({}) => {
        loading = true;
        error = false;
        errors = undefined;
        return async ({ result }: { result: any }) => {
                if(result.type === 'success') {
                    error = false;
                    loading = false;
                    let form = document.getElementById('contact-form') as HTMLFormElement;
                    form.reset();
                    await invalidateAll();
                    success = true;
                } else if (result.type === 'failure') {
                    errors = result.data?.errors;
                    loading = false;
                    error = false;
                } else {
                    error = true;
                    loading = false;
                }
                await applyAction(result);
        }
        
    };

</script>

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
            <div class="bg-gray-100 px-8 py-11 rounded-lg shadow-2xl max-w-[600px] ">
                <h3 class="text-3xl text-center font-bold text-delftblue-700 mb-11">Wyślij nam wiadomość</h3>
                {#if success}
                    <div class="bg-green-200 text-green-800 p-4 rounded-lg mb-4">
                        <p class="text-lg font-semibold">Twoja wiadomość została wysłana pomyślnie!</p>
                    </div>
                {/if}
                {#if error}
                    <div class="bg-red-100 text-red-800 p-4 rounded-lg mb-4">
                        <p class="text-lg font-semibold">Wystąpił błąd podczas wysyłania wiadomości. Proszę spróbować ponownie.</p>
                    </div>
                {/if}
                <form id="contact-form" novalidate action="?/submitContact" use:enhance={handleSubmit} method="POST" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div class="space-y-4">
                            <div>
                            <label for="name" class="text-md font-semibold text-delftblue-700 py-2">Imię i Nazwisko <span class="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Podaj Imię i Nazwisko" 
                            class="w-full p-3 border-2 {errors?.name ? 'border-red-500' : 'border-delftblue-200'} rounded-xl text-delftblue-800 bg-gray-100 focus:border-delftblue-500 focus:outline-none focus:ring-2 focus:ring-delftblue-200 transition-all" 
                        />
                        <div class="h-4 mt-1">
                            {#if errors?.name}
                                <p class="text-red-500 text-sm transition-opacity duration-200">{errors.name[0]}</p>
                            {/if}
                        </div>
                            </div>
                        <div>  
                            <label for="email" class="text-md font-semibold text-delftblue-700 py-2">Email <span class="text-red-500">*</span></label>
                            <input 
                        type="email" 
                        name="email" 
                        placeholder="Podaj swój email" 
                        class="w-full p-3 border-2 {errors?.email ? 'border-red-500' : 'border-delftblue-200'}  rounded-xl text-delftblue-800 bg-gray-100 focus:border-delftblue-500 focus:outline-none focus:ring-2 focus:ring-delftblue-200 transition-all" 
                    />
                    <div class="h-4 mt-1">
                        {#if errors?.email}
                            <p class="text-red-500 text-sm transition-opacity duration-200">{errors.email[0]}</p>
                        {/if}
                    </div>
                    </div>
                   
                        </div>
                        <div class="space-y-4">
                             <div>
                        <label for="NIP" class="text-md font-semibold text-delftblue-700 py-2">NIP Firmy</label>
                        <input 
                        type="text" 
                        name="NIP" 
                        placeholder="Podaj NIP twojej firmy"  
                        class="w-full p-3 border-2 border-delftblue-200 rounded-xl text-delftblue-800 bg-gray-100 focus:border-delftblue-500 focus:outline-none focus:ring-2 focus:ring-delftblue-200 transition-all"
                    />
                    </div>
                    <div class="h-4 mt-1"></div>
                   </div>
                    </div>
                   <div>
                           <label for="message" class="text-md font-semibold text-delftblue-700 py-2">Wiadomość <span class="text-red-500">*</span></label> 
                     <textarea 
                        name="message" 
                        placeholder="Powiedz nam, jak możemy Ci pomóc?" 
                        rows="4"
                        class="w-full p-3 border-2 {errors?.message ? 'border-red-500' : 'border-delftblue-200'} rounded-xl text-delftblue-800 bg-gray-100 focus:border-delftblue-500 focus:outline-none focus:ring-2 focus:ring-delftblue-200 transition-all"
                    ></textarea>
                    <div class="h-4 mt-1">
                        {#if errors?.message}
                            <p class="text-red-500 text-sm transition-opacity duration-200">{errors.message[0]}</p>
                        {/if}
                    </div>
                    </div>
                    <button 
                        form="contact-form"
                        type="submit" 
                        class="w-full bg-delftblue-700 text-white px-6 py-4 rounded-lg hover:bg-delftblue-600 focus:bg-delftblue-800 transition-colors font-semibold text-lg shadow-lg"
                        disabled={loading}
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

