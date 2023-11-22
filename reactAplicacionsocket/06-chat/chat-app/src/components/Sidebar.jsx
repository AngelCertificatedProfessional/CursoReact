import { useContext } from 'react'
import {ChatContext} from '../context/chat/ChatContext'
import {AuthContext} from '../auth/AuthContext'
import { SidebarChatItem } from './SidebarChatItem'

export const Sidebar = () => {

    const {chatState} = useContext(ChatContext)
    const {auth} = useContext(AuthContext)

    const {uid} = auth;
    console.log(chatState.usuarios)
    return (
        <div className="inbox_chat">

            {
                chatState.usuarios
                    .filter(user => user._id !== uid)
                    .map( (usuario) => (
                    <SidebarChatItem 
                        key={ usuario.uid } 
                        usuario={usuario}
                    />
                ))
            }


            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>


        </div>

    )
}
