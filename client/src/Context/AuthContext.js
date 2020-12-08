import React, {createContext,useState,useEffect} from 'react';
import AuthService from '../Services/AuthService';

export const AuthContext = createContext();

//child are the compents we want to wrap the provider around
export default ({ children })=>{
    //user is set to null, use SetUser to update it
    const [user,setUser] = useState(null);
    //is user authenticated
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    //check if app is loaded
    const [isLoaded,setIsLoaded] = useState(false);


    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            //we go the data so is loaded is now ture
            setIsLoaded(true);
        });
        //empty array as second to only run once
    },[]);

    //set what we want to render
    return (
        <div>
            {!isLoaded ? <h1>Loading</h1> : 
            //provide gloabl state to the components by wrapping children in AuthContext
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}