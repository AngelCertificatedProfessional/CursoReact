import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {
    
    const dispatch = useDispatch();
    const {events,activeEvent} = useSelector(state => state.calendar)

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async(calendarEvent) => {
        //Todo: llegar al backend
        //Todo bien
        if(calendarEvent._id){
            //actualizando
            dispatch(onUpdateEvent({...calendarEvent}));
        }else{
            //creando
            dispatch(onAddNewEvent({...calendarEvent,id: new Date().getTime()}))
        }
    }

    const startDeletingEvent = () => {
        // Todo: LLegar al backend
        dispatch(onDeleteEvent())
    }

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent, //!!es null entregara falso
        //*Metodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent
    }
}
