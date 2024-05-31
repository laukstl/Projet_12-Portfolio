'use client'

export default function Contact() {
    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "***REMOVED***");

        const object = Object.fromEntries(formData);

        if (!object.name && !object.email && object.nameadza && object.message) {
            const json:any = JSON.stringify(object);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (result.success) {
                alert("Votre message a bien été envoyé !");
            }
        }
    }

    return (
        <div className="min-w-[24rem] mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">

                {/* Real fields */}
                <label className="flex flex-col">
                    <span className="mb-1">Nom</span>
                    <input 
                        type="text" 
                        name="nameadza" 
                        className="p-2 border rounded" 
                        placeholder="Nom"
                        autoComplete="name"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Email</span>
                    <input 
                        type="email" 
                        name="emaildzas" 
                        className="p-2 border rounded" 
                        placeholder="email@fai.fr"
                        autoComplete="email"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Message</span>
                    <textarea 
                        name="message" 
                        className="p-2 border rounded" 
                        placeholder="Votre message..." 
                    />
                </label>

                {/* H o n e y p o t */}
                <label className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10">
                    <input
                        className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10"
                        autoComplete="off"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name here"
                    />
                </label>
                <label className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10">
                    <input
                        className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10"
                        autoComplete="off"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your e-mail here"
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
        </div>
    );
    

}
