import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth,googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const {displayName,email,photoURL,uid} = result.user;
        return {
            ok:true,
            displayName,email,photoURL,uid
        }
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message
        return {
            ok:false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email,password,displayName}) => {
    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid,photoURL} = resp.user;
        await updateProfile(FirebaseAuth.currentUser,{displayName})
        //TODO: actualziar el displayName in firebase
        return {
            ok:true,
            uid,photoURL,email,displayName
        }
    }catch(error){
        return {ok:false,errorMessage:error.message}
    }
}

export const loginWithEmailPassword = async({email,password}) => {
    try{
        console.log(email,password)
        const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password);
        console.log(resp)
        const {uid,photoURL,displayName} = resp.user;
        return {
            ok:true,
            uid,
            photoURL,
            displayName
        }
    }catch(error){
        return {ok:false,errorMessage:error.message}
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}