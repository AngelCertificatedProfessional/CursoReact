export interface Ticket {
    id: string;
    number: number;
    createAt: Date;
    handleAtDesk?: string;//Escritorio
    handleAt?: Date;
    done: boolean;
}