import { ok } from "assert";
import { UuidAdapter } from "../../config/uuid.adapter";
import { Ticket } from "../../domain/interfaces/ticket";

export class TicketService {
    private readonly tickets: Ticket[] = [
        { id: UuidAdapter.v4(), number: 1, createAt: new Date(), done: false },
        { id: UuidAdapter.v4(), number: 2, createAt: new Date(), done: false },
        { id: UuidAdapter.v4(), number: 3, createAt: new Date(), done: false },
        { id: UuidAdapter.v4(), number: 4, createAt: new Date(), done: false },
        { id: UuidAdapter.v4(), number: 5, createAt: new Date(), done: false },
        { id: UuidAdapter.v4(), number: 6, createAt: new Date(), done: false }
    ]

    public get pendingTickets(): Ticket[] {
        return this.tickets.filter(ticket => !ticket.handleAtDesk)
    }

    public lastTicketNumber(): number {
        return this.tickets.length > 0 ? this.tickets.at(-1)!.number : 0
    }

    public createTicket() {
        const ticket: Ticket = {
            id: UuidAdapter.v4(),
            number: this.lastTicketNumber() + 1,
            createAt: new Date(),
            done: false,
            handleAt: undefined,
            handleAtDesk: undefined
        }
        this.tickets.push(ticket)
        return ticket;
    }

    public drawTicket(desk: string) {
        const ticket = this.tickets.find(tick => !tick.handleAtDesk);
        if (!ticket) return { status: 'error', message: 'No hay tickets pendientes' }
        ticket.handleAtDesk = desk;
        ticket.handleAt = new Date();
        //Todo: WS
        return { status: ok, ticket }
    }

    public onFinishedTicket(id: string) {
        const ticket = this.tickets.find(ticket => ticket.id === id);
        if (!ticket) return { status: 'error', message: 'Ticket no encontrado' }
        this.tickets.map(ticket => {
            if (ticket.id === id) {
                ticket.done = true;
            }
            return ticket;
        })
        return { status: 'ok' }
    }



}