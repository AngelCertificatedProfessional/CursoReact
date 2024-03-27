export class UpdateTodoDto {
    constructor(
        public readonly id: number,
        public readonly text: string,
        public readonly completedAt?: Date
    ) { }

    get values() {
        //las llaves son cadenas y el objeto es cualquier cosa
        const returnObj: { [key: string]: any } = {};
        if (this.text) returnObj.text = this.text
        if (this.completedAt) returnObj.completedAt = this.completedAt
        return returnObj
    }

    //string para marcar error, UpdateTodoDto fue la respuesta correcta
    static create(props: { [key: string]: any }): [string?, UpdateTodoDto?] {
        const { id, text, completedAt } = props;
        let newCompletedAt = completedAt

        if (!id || isNaN(Number(id))) {
            return ['id mustt be a valid number']
        }

        if (completedAt) {
            newCompletedAt = new Date(completedAt)
            if (newCompletedAt.toString() === 'Invalid Date') {
                return ['CompletedAt must be a valid date']
            }
        }
        return [undefined, new UpdateTodoDto(id, text, newCompletedAt)];
    }
}