import { createContext, useCallback, useState } from 'react'
import {fetchConToken, fetchSinToken} from '../helpers/fetch'

export const AuthContext = createContext();

const initialState = {
    uid:null,
    checking:true,
    logged: false,
    name:null,
    email:null
}

export const AuthProvider = ({children}) => {
  
    const [auth,setAuth] = useState(initialState)

    const login = async(email,password) => {
        const resp = await fetchSinToken('login',{email,password},'POST')
        if(resp.ok) {
            localStorage.setItem('token',resp.token);
            const {usuario} = resp;

            setAuth({
                uid:usuario.uid,
                checking:false,
                logged: true,
                name:usuario.nombre,
                email:usuario.email
            })
            console.log('Autentificado!')
        }
        return resp.ok;
    } 

    const register = async(nombre,email,password) => {
        console.log(nombre,email,password)

        const resp = await fetchSinToken('login/new',{email,password,nombre},'POST')
        
        if(resp.ok) {
            localStorage.setItem('token',resp.token);
            const {usuario} = resp;

            setAuth({
                uid:usuario.uid,
                checking:false,
                logged: true,
                name:usuario.name,
                email:usuario.email
            })
            console.log('Autentificado!')
            return true;
        }
        return resp.msg;

    }

    const verificaToken = useCallback( async() => {

        const token = localStorage.getItem('token');
        if(!token){
            setAuth({
                uid:null,
                checking:false,
                logged: false,
                name:null,
                email:null
            })
            return false;
        }
        console.log('test')
        const resp = await fetchConToken('login/renew',{},'POST');
        console.log(resp)
        if(resp.ok){
            localStorage.setItem('token',resp.token);
            const {usuario} = resp;

            setAuth({
                uid:usuario.uid,
                checking:false,
                logged: true,
                name:usuario.nombre,
                email:usuario.email
            })
            return true;
        }else{
            setAuth({
                uid:null,
                checking:false,
                logged: false,
                name:null,
                email:null
            })
            return false;
        }
    },[])

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificaToken,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
