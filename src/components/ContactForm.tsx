'use client';

import { useState, useRef } from 'react';

interface FormErrors {
    nameadza?: string;
    emaildzas?: string;
    message?: string;
}

export default function Contact() {
    const [formStatus, setFormStatus] = useState<string>('');
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);


        // convertion de FormData en objet
        const object = Object.fromEntries(formData.entries()) as Record<string, string>;

        // check du pot de miel
        if (object.username || object.useremail) {
            setFormStatus('Une erreur s\'est produite. Veuillez réessayer.');
            return;
        }

        // validation des champs
        const errors = validateForm(object);
        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            setFormStatus('Veuillez corriger les erreurs dans le formulaire.');
            return;
        }

        setFormErrors({});
        const json: string = JSON.stringify(object);

        try {
            setIsLoading(true);
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.success) {
                setFormStatus('Votre message a bien été envoyé !');
                formRef.current?.reset();
            } else {
                setFormStatus('Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Error:', error);
            setFormStatus('Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez vérifier votre connexion et réessayer.');
        } finally {
            setIsLoading(false);
        }
    }

    function validateForm(object: Record<string, string>): FormErrors {
        const errors: FormErrors = {};
        if (!object.nameadza) errors.nameadza = "Le nom est requis.";
        if (!object.emaildzas) {
            errors.emaildzas = "L'email est requis.";
        } else if (!/\S+@\S+\.\S+/.test(object.emaildzas)) {
            errors.emaildzas = "Le format de l'email est invalide. Exemple: exemple@domaine.com";
        }
        if (!object.message) errors.message = "Le message est requis.";
        return errors;
    }

    return (
        <div className="min-w-20 mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
                <label className="flex flex-col">
                    <span className="mb-1">Nom</span>
                    <input 
                        type="text" 
                        name="nameadza" 
                        className={`p-2 border rounded dark:rounded-none ${formErrors.nameadza ? 'border-red-500' : ''} dark:bg-white dark:text-black`} 
                        placeholder="Nom"
                        autoComplete="name"
                        // required
                    />
                    {formErrors.nameadza && <span className="text-red-500 dark:drop-shadow-[0_1.1px_1.1px_rgba(255,255,255,0.3)]">{formErrors.nameadza}</span>}
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Email</span>
                    <input 
                        type="email" 
                        name="emaildzas" 
                        className={`p-2 border rounded dark:rounded-none ${formErrors.emaildzas ? 'border-red-500' : ''} dark:bg-white dark:text-black`} 
                        placeholder="exemple@domaine.com"
                        autoComplete="email"
                        // required
                    />
                    {formErrors.emaildzas && <span className="text-red-500 dark:drop-shadow-[0_1.1px_1.1px_rgba(255,255,255,0.3)]">{formErrors.emaildzas}</span>}
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Message</span>
                    <textarea 
                        name="message" 
                        className={`p-2 border rounded dark:rounded-none ${formErrors.message ? 'border-red-500' : ''} dark:bg-white dark:text-black`} 
                        placeholder="Votre message..."
                        // required
                    />
                    {formErrors.message && <span className="text-red-500 dark:drop-shadow-[0_1.1px_1.1px_rgba(255,255,255,0.3)]">{formErrors.message}</span>}
                </label>

                {/* Honeypot */}
                <label className="hidden">
                    Username
                    <input
                        type="text"
                        name="username"
                        autoComplete="off"
                    />
                </label>
                <label className="hidden">
                    Useremail
                    <input
                        type="email"
                        name="useremail"
                        autoComplete="off"
                    />
                </label>

                {/* Submit button */}
                <button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded dark:rounded-none flex gap-3 justify-center"
                >
                    Envoyer un message {isLoading && <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />}
                </button>
            </form>
            {formStatus && <div className="mt-4 text-red-500 dark:drop-shadow-[0_1.1px_1.1px_rgba(255,255,255,0.3)]">{formStatus}</div>}
        </div>
    );
}
