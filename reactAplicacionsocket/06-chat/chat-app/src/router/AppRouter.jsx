import {
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';


export const AppRouter = () => {

    const {auth,verificaToken} = useContext(AuthContext)

    useEffect(() => {
        verificaToken();
    },[verificaToken])

    if(auth.checking){
        return <h1>Espere por favor</h1>
    }

    return (
        <div>
            <Routes>
                <Route path="/auth/*" element={ <AuthRouter/> } />
                <Route path="/" element={ <ChatPage/> } />
                <Route path="/*" element={ <Navigate to="/"/>}/>
            </Routes>
        </div>
    )
}
