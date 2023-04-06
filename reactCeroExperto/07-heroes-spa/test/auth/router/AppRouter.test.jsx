import { render,screen } from "@testing-library/react"
import { MemoryRouter,Routes,Route } from "react-router-dom"
import { AuthContext } from "../../../src/auth";
import { AppRouter } from "../../../src/router/AppRouter";

describe('Pruebas en <AppRouter>',() => {
    test('debe de mostrar el login si no esta autorizado', () => {
        const contextValue = {
            logged:false
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value = {contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        screen.debug()
        expect(screen.getAllByText('Login').length).toBe(2)
    })

    test('debe de mostrar el componente de marvel si esta autentificado', () => {
        const contextValue = {
            logged:true,
            user: {
                id:'ABC',
                name: 'Juan Carlos'
            }
        }
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value = {contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
    })

})