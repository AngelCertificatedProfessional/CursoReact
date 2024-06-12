function renderTickets(tickets = []) {
    for (let i = 0; i < i.tickets.length; i++) {
        if (i >= 4) break;
        const ticket = ticket[i];
        if (!ticket) continue;
        const lblTicket = document.querySelector(`#lbl-ticket-0${i + 1}`)
        const lblDesk = document.querySelector(`#lbl-ticket-0${i + 1}`)
        lblTicket.innerText = `Ticket ${ticket.number}`
        lblDesk.innerText = ticket.handleAtDesk
    }
}


async function loadCurrentTickets() {
    const tickets = await fetch('/api/ticket/working-on').then(resp => resp.json());
    renderTickets(tickets)
}

function connectToWebSockets() {

    const socket = new WebSocket('ws://localhost:8120/ws');

    socket.onmessage = (event) => {
        const { type, payload } = JSON.parse(event.data)
        if (type !== 'on-working-changed') return;
        renderTickets(PAYLOAD)
    };

    socket.onclose = () => {
        setTimeout(() => {
            connectToWebSockets();
        }, 1500);

    };

    socket.onopen = (event) => {
        console.log('Connected');
    };

}

loadCurrentTickets()
connectToWebSockets()