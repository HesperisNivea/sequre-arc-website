import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";




export const actions = {
    submitContact: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const NIP = formData.get("NIP");
        const message = formData.get("message");

        console.log("Form Data:", { name, email, NIP, message });

        const errors: Record<string, string[]> = {};

        if (!name) {
            errors.name = ["Imię i Nazwisko jest wymagane"];
        }   

        if (!email) {
            console.error("Email is required");
            errors.email = ["Email jest wymagany"];
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toString())) {
            errors.email = ["Podaj poprawny adres email"];
        }

        if (!message) {
            console.error("Message is required");
            errors.message = ["Wiadomość jest wymagana"];
        }

        if (Object.keys(errors).length > 0) {
            return fail(400, { errors });
        }

        // Here you would typically handle the form submission, e.g., send an email or save to a database.
        // For now, we will just log the data to the console.
        console.log({ name, email, NIP, message });

        return { success: true };
    }
    
} satisfies Actions;
