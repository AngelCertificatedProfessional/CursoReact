import { bcryptAdapter } from "../../config";
import { JwtAdapter } from "../../config/jwt.adapter";
import { UserModel } from "../../data/mongo/models/user.model";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { EmailService } from "./email.services";

export class AuthServices {
    constructor(
        private readonly emailService: EmailService
    ) {
    }

    public async registerUser(registerUserDTO: RegisterUserDto) {
        const existUser = await UserModel.findOne({ email: registerUserDTO.email })
        if (existUser) throw CustomError.badRequest('Email aready exist')
        try {
            const user = new UserModel(registerUserDTO);

            //Encriptar la contraqsena
            user.password = bcryptAdapter.hash(registerUserDTO.password)
            await user.save()
            const { password, ...userEntity } = UserEntity.fromObject(user);
            const token = await JwtAdapter.generateToken({
                id: user.id,
            })
            if (!token) throw CustomError.internalServer('Error creando el JWT')
            return {
                ...userEntity,
                token
            };
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    }

    public async loginUser(loginUserDto: LoginUserDto) {
        const user = await UserModel.findOne({ email: loginUserDto })
        if (!user) throw CustomError.badRequest('Email no existe')
        const isMatching = bcryptAdapter.compare(loginUserDto.password, user.password)
        if (!isMatching) throw CustomError.badRequest('Password is not valid')
        const { password, ...userEntity } = UserEntity.fromObject(user)

        const token = await JwtAdapter.generateToken({
            id: user.id,
        })
        if (!token) throw CustomError.internalServer('Error creando el JWT')

        return {
            user: userEntity,
            token
        }
    }

    private sendEmailValidationLink = async (email: string) => {

    }


}