import { addDoc, doc,collection, setDoc} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
export const startNewNote = () => {
    return async(dispatch,getState) => {

        const {uid} = getState().auth;
        const newNote = {
            title:'',
            body:'',
            date:new Date().getTime()
        }
        //Proceso para guardar en la bd
        const newDoc = doc(collection(FirebaseDB,`${uid}/journal/notes`))
        const setDocRes = await setDoc(newDoc,newNote);
        console.log({setDocRes,newNote})

        // const ref = await addDoc(collection(FirebaseDB, `${uid}`,`journal/notes`),newNote);
        // console.log(ref)
        //! dispatch
        //dispatch(newNote)
        //dispatch(activarNote)
    } 
}