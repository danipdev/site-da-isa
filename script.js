document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "O amor não se vê com os olhos, mas com o coração.",
        "Amar é encontrar na felicidade do outro a própria felicidade.",
        "Eu me apaixono mais por você a cada dia que passa!",
        "Eu te amo tanto minha menina <3",
        "Você é a razão pela qual eu sorrio todos os dias.",
        "Espero um dia, realmente poder estar na sua frente e dizer: eu te amo"
    ];

    const revealQuoteButton = document.getElementById('reveal-quote');
    const dailyQuote = document.getElementById('daily-quote');
    const lastClickedKey = 'lastClickedDate';

    const checkLastClickDate = () => {
        const lastClickedDate = localStorage.getItem(lastClickedKey);
        if (lastClickedDate) {
            const lastDate = new Date(lastClickedDate);
            const today = new Date();

            if (lastDate.toDateString() === today.toDateString()) {
                return true;
            }
        }
        return false;
    };

    const displayQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        dailyQuote.textContent = quotes[randomIndex];
        localStorage.setItem(lastClickedKey, new Date().toISOString());
    };

    revealQuoteButton.addEventListener('click', () => {
        if (checkLastClickDate()) {
            alert("Você já revelou a citação de hoje. Volte amanhã para ver outra!");
        } else {
            displayQuote();
            revealQuoteButton.disabled = true;
        }
    });

    if (checkLastClickDate()) {
        revealQuoteButton.disabled = true;
    }
});