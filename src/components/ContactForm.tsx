'use client'

export default function Contact() {
    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "***REMOVED***");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

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
            alert("Message correctecly sent!");
        }
    }

    return (
        <div className="min-w-[24rem] p-4 border mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
                <label className="flex flex-col">
                    <span className="mb-1">Nom</span>
                    <input 
                        type="text" 
                        name="name" 
                        className="p-2 border rounded" 
                        placeholder="Nom" 
                    />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Email</span>
                    <input 
                        type="email" 
                        name="email" 
                        className="p-2 border rounded" 
                        placeholder="votre-email@" 
                    />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Message</span>
                    <textarea 
                        name="message" 
                        className="p-2 border rounded" 
                        placeholder="Message..." 
                    />
                </label>
                <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                >
                    Envoyer un message
                </button>
            </form>
        </div>
    );
    

}
