import { Validators } from "../../../config";

export class CreateProductDto {
    private constructor(
        public readonly name: string,
        public readonly avaliable: string,
        public readonly price: number,
        public readonly description: string,
        public readonly user: string, //Id
        public readonly category: string //id
    ) {

    }

    static create(props: { [key: string]: any }): [string?, CreateProductDto?] {
        const {
            name,
            avaliable,
            price,
            description,
            user,
            category
        } = props;
        if (!name) return ['Missing name'];
        if (!user) return ['Missing user'];
        if (!Validators.isMongoId(user)) return ['Invalid User Id']
        if (!category) return ['Missing category'];
        if (!Validators.isMongoId(category)) return ['Invalid category Id']
        return [
            undefined,
            new CreateProductDto(
                name,
                avaliable,
                price,
                description,
                user,
                category
            )
        ]
    }
}