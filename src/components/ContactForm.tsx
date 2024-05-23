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
        <div className="w-100 border border-red-500">  {/* FIXME: mt mb */}
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <label>Nom
                    <input type="text" name="name" className="mb-2 p-2 border rounded" placeholder="Nom" />
                </label>
                <label>Email
                    <input type="email" name="email" className="mb-2 p-2 border rounded" placeholder="Email" />
                </label>
                <label>Votre message
                    <textarea name="message" className="mb-2 p-2 border rounded" placeholder="Message..."></textarea>
                </label>
                <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                    Envoyer un message
                </button>
            </form>
        </div>
    );

}
