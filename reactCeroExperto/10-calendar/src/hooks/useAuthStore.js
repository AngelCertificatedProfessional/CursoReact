import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import { onLogoutCalendar } from "../store";
// se puede agregar tambien el el hook de auth
export const useAuthStore = () => {
    const {status,user,errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email,password}) => {
        dispatch(onChecking())
        try{
            const {data} = await calendarApi.post('/auth',{email,password})
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(onLogin({name:data.name,uid:data.uid}))
        }catch(error){
            dispatch(onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch(clearErrorMessage());
            },10)
        }
    }

    // startRegister
    const startRegister = async({email,password,name}) => {
        dispatch(onChecking())
        try{
            const {data} = await calendarApi.post('/auth/new',{email,password,name})
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(onLogin({name:data.name,uid:data.uid}))
        }catch(error){
            let erroresSinArreglo = 'Error no detectado';
           if (error.response.data.hasOwnProperty('msg') && typeof error.response.data.msg === 'string') {
                erroresSinArreglo = error.response.data?.msg;
            }else if (error.response.data.hasOwnProperty('msg') && typeof error.response.data.msg === 'object'){
                erroresSinArreglo = Object.values(error.response.data.msg).map(e=>{ return e.msg}).join(); 
            }
            dispatch(onLogout(erroresSinArreglo))
            setTimeout(() => {
                dispatch(clearErrorMessage());
            },10)
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token')
        if(!token) return dispatch(onLogout())

        try{
            const {data} = await calendarApi.get('auth/renew')
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(onLogin({name: data.name,uid:data.uid}))
        }catch(error){
            localStorage.clear();
            dispatch(onLogout())
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogoutCalendar())
        dispatch(onLogout())
    }

    return {
        //Propiedades 
        errorMessage,
        status,
        user,
        //*Metodos
        startLogout,
        startLogin,
        startRegister,
        checkAuthToken
    }
}