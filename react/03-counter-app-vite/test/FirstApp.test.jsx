import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
    // test('debe de hacer match con el snapshot', () => {
    //     const title = 'Hola, soy goku'
    //     //actualiza el objeto 
    //     const {container} = render(<FirstApp title = {title}/>)
    //     //Valida que la copia sea igual que lo que se esta corriendo
    //     expect(container).toMatchSnapshot()
    // })

    test('deber de mostrar el titulo en un h1', () => {
        const title = 'Hola soy goku';
        const {container,getByText,getByTestId} = render(<FirstApp title={title}/>)
        //Valida que en la rendierizacion exista el titulo
        //expect(getByText(title)).toBeTruthy()
        //evaluamos si existe el eelemento
        expect(getByTestId('test-title')).toBeTruthy()
        //evaluamos si lo que esta escrito es igual a lo que necesitamos
        expect(getByTestId('test-title').innerHTML).toContain(title)
        

        ///--------Fin-----------
        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML)
        // //Otra manera de evalair los errores pero no puede evaluar espacios
        // expect(h1.innerHTML).toBe(title);
        // //Otra manera de evalair los errores pero solo evalua que los contenga
        // expect(h1.innerHTML).toContain(title);
    })

    test('Debe de mostrar el subtitulo enviado por props',() => {
        const title = 'Hola soy goku'; 
        const subTitle = 'Hola un subtitutlo goku';
        const {getByText,getAllByText} = render(<FirstApp title={title} subTitle={subTitle}/>)
        expect(getByText(subTitle)).toBeTruthy();
        //ayuda a identificar si trae varios eleementos con la misma etiqueta
        expect(getAllByText(subTitle).length).toBe(1);
    })

})