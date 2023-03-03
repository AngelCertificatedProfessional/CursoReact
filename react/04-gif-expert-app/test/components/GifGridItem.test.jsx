import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Pruebas en <GifGridItem/>',() => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama2.jpg'
    test('debe de hacer match con el snapshot',() => {

        const {container} = render(<GifGridItem title={title} url={url}/>)
        //validamos que la fotografia este siendo la misma a lo que estamos corriendo
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado',() => {
        render(<GifGridItem title={title} url={url}/>)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        //evauamos que exista los elementos y que sean del mismo tipo
        const {alt,src} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe de mostrar el titulo en el component',() => {
        render(<GifGridItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })

})