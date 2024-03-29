import { bcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongo/models/user.model";
import { CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthServices {
    constructor() { }

    public async registerUser(registerUserDTO: RegisterUserDto) {
        const existUser = await UserModel.findOne({ email: registerUserDTO.email })
        if (existUser) throw CustomError.badRequest('Email aready exist')
        try {
            const user = new UserModel(registerUserDTO);

            //Encriptar la contraqsena
            user.password = bcryptAdapter.hash(registerUserDTO.password)
            await user.save()
            const { password, ...userEntity } = UserEntity.fromObject(user);
            return {
                ...userEntity,
                token: 'ABD'
            };
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    }
}