import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { convertsEventsToDateEvents } from "../helpers";

export const useCalendarStore = () => {
    
    const dispatch = useDispatch();
    const {events,activeEvent} = useSelector(state => state.calendar)
    const {user} = useSelector(state => state.auth)

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
            const {data} = await calendarApi.post('/events',calendarEvent);
            dispatch(onAddNewEvent({...calendarEvent,id: data.evento.id,user}))
        }
    }

    const startDeletingEvent = () => {
        // Todo: LLegar al backend
        dispatch(onDeleteEvent())
    }

    const startLoadingEvents = async() => {
        try{    
            const {data} = await calendarApi.get('events')
            console.log({data})
            const events = convertsEventsToDateEvents(data.eventos)
            console.log(events)
            dispatch(onLoadEvents(events))
        }catch(error){
            console.log('Error cargando eventos');
            console.log(error)
        }
    }

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent, //!!es null entregara falso
        //*Metodos
        setActiveEvent,
        startDeletingEvent,
        startLoadingEvents,
        startSavingEvent,
    }
}
