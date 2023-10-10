import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";
import { convertsEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

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
        try{
            if(calendarEvent.id){
                //actualizando
                await calendarApi.put(`/events/${calendarEvent.id}`,calendarEvent);
                dispatch(onUpdateEvent({...calendarEvent,user}));
                return;
            }
            //creando
            const {data} = await calendarApi.post('/events',calendarEvent);
            dispatch(onAddNewEvent({...calendarEvent,id: data.evento.id,user}))
        }catch(error){
            let erroresSinArreglo = 'Error no detectado';
            if (error.response.data.hasOwnProperty('msg') && typeof error.response.data.msg === 'string') {
                erroresSinArreglo = error.response.data?.msg;
            }else if (error.response.data.hasOwnProperty('msg') && typeof error.response.data.msg === 'object'){
                erroresSinArreglo = Object.values(error.response.data.msg).map(e=>{ return e.msg}).join(); 
            }
            Swal.fire('Error al guardar',erroresSinArreglo,'error')
        }
        
        
    }

    const startDeletingEvent = async() => {
        // Todo: LLegar al backend
        try{
            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch(onDeleteEvent())
        }catch(error){
            let erroresSinArreglo = 'Error no detectado';
            if (error.response.data.hasOwnProperty('msg') && typeof error.response.data.msg === 'string') {
                erroresSinArreglo = error.response.data?.msg;
            }else if (error.response.data.hasOwnProperty('msg') && typeof error.response.data.msg === 'object'){
                erroresSinArreglo = Object.values(error.response.data.msg).map(e=>{ return e.msg}).join(); 
            }
            Swal.fire('Error al eliminar',erroresSinArreglo,'error')
        }
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
