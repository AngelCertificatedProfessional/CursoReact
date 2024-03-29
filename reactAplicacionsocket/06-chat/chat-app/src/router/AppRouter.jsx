import {
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


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
                <Route
                    path="/auth/*"
                    element={<PublicRoute isAuthenticated={auth.logged} />}
                    />
                <Route
                    path="/"
                    element={<PrivateRoute isAuthenticated={auth.logged} />}
                    />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}
