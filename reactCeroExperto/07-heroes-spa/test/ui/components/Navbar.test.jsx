import { MemoryRouter, useNavigate } from "react-router-dom"
import { render,screen,fireEvent } from "@testing-library/react"
import { Navbar } from "../../../src/ui";
import { AuthContext } from "../../../src/auth";

const mockedUserNavigate= jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUserNavigate
}))

describe('Pruebas en <Navbar />', () => {
    const contextValue = {
        logged:true,
        user:{
            name:'Juan Carlos'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value= {contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        screen.debug()
        expect(screen.getByText('Juan Carlos')).toBeTruthy();
    })

    test('debe de llamar el logout y el navigate cuando se hace click en el boton', () => {

        render(
            <AuthContext.Provider value= {contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn)
        
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUserNavigate).toHaveBeenCalledWith('/login',{"replace":true});
    })
})