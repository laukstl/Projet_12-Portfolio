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
    const formRef = useRef<HTMLFormElement>(null);

    const access_key = process.env.NEXT_PUBLIC_ACCESS_KEY;

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (access_key) {
            formData.append("access_key", access_key);
        } else {
            console.error("Access key is not defined");
            // return;
        }

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
            const response = await fetch("https://api.web3forms.com/submit", {
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
                        className={`p-2 border rounded ${formErrors.nameadza ? 'border-red-500' : ''}`} 
                        placeholder="Nom"
                        autoComplete="name"
                    />
                    {formErrors.nameadza && <span className="text-red-500">{formErrors.nameadza}</span>}
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Email</span>
                    <input 
                        type="email" 
                        name="emaildzas" 
                        className={`p-2 border rounded ${formErrors.emaildzas ? 'border-red-500' : ''}`} 
                        placeholder="exemple@domaine.com"
                        autoComplete="email"
                    />
                    {formErrors.emaildzas && <span className="text-red-500">{formErrors.emaildzas}</span>}
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Message</span>
                    <textarea 
                        name="message" 
                        className={`p-2 border rounded ${formErrors.message ? 'border-red-500' : ''}`} 
                        placeholder="Votre message..." 
                    />
                    {formErrors.message && <span className="text-red-500">{formErrors.message}</span>}
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
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                    Envoyer un message
                </button>
            </form>
            {formStatus && <div className="mt-4 text-red-500">{formStatus}</div>}
        </div>
    );
}
