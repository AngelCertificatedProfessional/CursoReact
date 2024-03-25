export class CreateTodoDto {
    constructor(
        public readonly text: string
    ) {

    }
    //string para marcar error, createtododto fue la respuesta correcta
    static create(props: { [key: string]: any }): [string?, CreateTodoDto?] {
        const { text } = props;
        if (!text) return ['Text property is required', undefined]
        return [undefined, new CreateTodoDto(text)];
    }
}