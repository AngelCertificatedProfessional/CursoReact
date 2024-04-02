import { bcryptAdapter, envs } from "../../config";
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

            await this.sendEmailValidationLink(user.email);

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
        const user = await UserModel.findOne({ email: loginUserDto.email })
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
        const token = await JwtAdapter.generateToken({ email });
        if (!token) throw CustomError.internalServer('Error getting token');
        const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`;
        const html = `
            <h1> Validate Your email </h1>
            <p> Click on the followint link to valdiate your email</p>
            <a href="${link}"> Validate your email: ${email} </a>
            `;
        const options = {
            to: email,
            subject: 'Validate your email',
            htmlBody: html
        }

        const isSent = await this.emailService.sendEmail(options);
        if (!isSent) throw CustomError.internalServer('Error sending email')
        return true;
    }

    public validateEmail = async (token: string) => {
        const payload = await JwtAdapter.validateToken(token)
        if (!payload) throw CustomError.unauthorize('Invalid Token')

        const { email } = payload as { email: string };
        if (!email) throw CustomError.internalServer('Email not in token')

        const user = await UserModel.findOne({ email })
        if (!user) throw CustomError.internalServer('Email not exist');

        user.emailValidated = true;
        await user.save()
        return true
    }
}