import { Satellite } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: false,
       messageSaved:'',
       notes: [],
       active: null
   },
   reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote : (state,action) => {
            console.log(action)
            state.notes.push(action.payload);
            state.isSaving = false
        },
        setActiveNote: (state,action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state,action) => {
            state.notes = action.payload;
        },
        setSaving: (state,action) => {
            state.isSaving = true
            state.messageSaved = '';
        },
        updateNote: (state,action) => {//payload note
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                //nota actalizada
                if(note.id === action.payload.id){
                    return action.payload;                    
                }
                return note;
            })
            state.messageSaved = `${action.payload.title}, actualizada correctamente`;
        },
        setPhotosToActiveNote:(state,action) => {
            state.active.imageUrls = [...state.active.imageUrls,...action.payload]
            state.isSaving = false
        },
        deleteNoteById: (state,action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    setPhotosToActiveNote,
} = journalSlice.actions;