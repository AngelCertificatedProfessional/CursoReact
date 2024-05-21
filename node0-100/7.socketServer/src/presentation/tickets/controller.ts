import { Request, Response } from "express"

export class TicketController {
    //Di = WssService
    constructor() {

    }

    public getTickets = async (req: Request, res: Response) => {
        res.json('getTickets')
    }

    public getLastTickerNumber = async (req: Request, res: Response) => {
        res.json('getLastTickerNumber')
    }

    public pendingTickets = async (req: Request, res: Response) => {
        res.json('pendingTickets')
    }

    public createTicket = async (req: Request, res: Response) => {
        res.json('createTicket')
    }

    public drawTicket = async (req: Request, res: Response) => {
        res.json('drwaTicket')
    }

    public ticketFinish = async (req: Request, res: Response) => {
        res.json('ticketFinish')
    }

    public workingOn = async (req: Request, res: Response) => {
        res.json('workingOn')
    }
}