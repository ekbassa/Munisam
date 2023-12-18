import {createContext, useState, useEffect} from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener, } from '../Utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    // we are sharing the value object with all wrapped component(children),
    // to enable then to get/set the user 

    useEffect(()=>{
        const unSubscribe = onAuthStateChangedListener((user)=>{
           if(user){
             createUserDocumentFromAuth(user)
           }
           setCurrentUser(user)
        })
        return unSubscribe
        
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}