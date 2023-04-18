import { fireEvent, render,screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes"

const mockedUserNavigate= jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUserNavigate
}))

describe('Pruebas en <SearchPage />', () => {

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrarse correctamente con valores por defecto', () => { 
        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrarse batman y el input con el valor del queryString', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/heroes/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('none')
    })

    test('debe de mostrarse un error si no se encuentra el hero', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/heroes/dc-batman.jpg')

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('none')
    })

    test('debe de mostrarse un error si no se encuentra el hero', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger')
        expect(alert.style.display).toBe('')
        
    })

    test('debe de llamar el navigate a la pantalla nueva', () => { 

        const inputValue = 'superman'

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input,{target:{name:'searchText',value:inputValue}})
        
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(mockedUserNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)

    })
})