import {
    Routes,
    Route,
    Navigate,
  } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
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
