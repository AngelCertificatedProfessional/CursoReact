import { render,screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp2 />', () => {

    const title = 'Hola, Soy Goku';
    const subTitle = 'Hola un subtitutlo goku';

    test('Debe de hacer match con el snapshot',() => {
        const {container} = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el mensaje "Hola soy goku"',() => {
        //Nos ayuda a validar que exista el objeto
        render(<FirstApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy()
    });

    test('Debe de mostrar el titulo en un h1',() => {
        //Nos ayuda a validar que exista el objeto
        render(<FirstApp title={title}/>)
        //heading h1,h2
        //level representa el nivel en este caso level 1 es h1
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)
    });
    test('Debe de mostrar el subtitulo enviado por el props',() => {
        //Nos ayuda a validar que exista el objeto
        render(<FirstApp title={title} subTitle={subTitle}/>)
        //heading h1,h2
        //level representa el nivel en este caso level 1 es h1
        expect(screen.getAllByText(subTitle).length).toBe(2)
    });
})