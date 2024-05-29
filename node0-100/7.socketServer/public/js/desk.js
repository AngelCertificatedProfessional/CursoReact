//Referencias HTML
const lblPending = document.querySelector("#lbl-pending")
const deskHeader = document.querySelector("h1")

const searchParams = new URLSearchParams(window.location.search)

if (searchParams.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('Escritorio es requerido')
}

const deskNumber = searchParams.get('escritorio')
deskNumber.innerText = deskNumber;


async function loadInitialCount() {
    const pending = await fetch('/api/ticket/pending').then(resp => resp.json())
    lblPending.innerHTML = pending.length || 0;
}

function connectToWebSockets() {

    const socket = new WebSocket('ws://localhost:8120/ws');

    socket.onmessage = (event) => {
        const { type, payload } = JSON.parse(event.data)
        if (type !== 'on-ticket-count-changed') return;
        lblPending.innerHTML = payload
    };

    socket.onclose = (event) => {
        console.log('Connection closed');
        setTimeout(() => {
            console.log('retrying to connect');
            connectToWebSockets();
        }, 1500);

    };

    socket.onopen = (event) => {
        console.log('Connected');
    };

}


loadInitialCount()
connectToWebSockets()