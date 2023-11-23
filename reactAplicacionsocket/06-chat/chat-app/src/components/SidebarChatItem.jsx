import { useContext } from "react"
import icon from "../resources/icon.png"
import { ChatContext } from "../context/chat/ChatContext"
import { types } from "../types/types"
export const SidebarChatItem = ({usuario}) => {
    const {chatState,dispatch} = useContext(ChatContext)
    const {chatActivo } = chatState;

    const onClick = () => {
        dispatch({
            type:types.activarChat,
            payload:usuario._id
        })
    }

    return (
        <div 
            className={`chat_list ${(usuario._id === chatActivo) && 'active_chat'}`}
            onClick = {onClick}
            >
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src={icon} alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{usuario.nombre}</h5>
                    {
                        (usuario.online) 
                            ?
                            <span className="text-success">Online</span>
                        :
                            <span className="text-danger">Offline</span>
                    }
                </div>
            </div>
        </div>
    )
}
