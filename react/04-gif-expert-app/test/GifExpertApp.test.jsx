import { render,screen} from "@testing-library/react"
import {GifExpertApp} from '../src/GifExpertApp'
describe('Pruebas en <GitExpertApp/>', () => {
    test('debe de mostrar el loading inicialmente',()=>{
        render(<GifExpertApp/>);
        screen.debug()
        
    });

   
})