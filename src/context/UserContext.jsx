import { createContext, useContext, useState } from "react"
import UserApi from "../services/api/User";

//create context with default value
export const UserStateContext = createContext({
    user: null,
    setUser: () => {},
    logout: () => {},
    login: (email, password) => {},
    authenticated: false,
    setAuthenticated: () => {},
    setToken: () => {},
});
//context provider component
export default function UserContext({children}){
    const [user,setUser] = useState(null);
    const [authenticated , _setAuthenticated] = useState(false);
    const login = async (email,password)=>{
        return UserApi.login(email,password);
    }
    const logout = async () => {
        try{
            await UserApi.logout();

            //clear Logout Api
            setUser(null);
            _setAuthenticated(false);
            window.localStorage.removeItem('AUTHENTICATED');
            window.localStorage.removeItem('token');

        }catch(error){
            console.log(error);
            throw error;
        }
    }
    const setAuthenticated = (isAuthenticated) =>{
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem('AUTHENTICATED', isAuthenticated);
    }
    const setToken = (token)=>{
        window.localStorage.setItem('token',token);
    }
  
    return (
    <UserStateContext.Provider value={{ 
        user,
        login,
        logout,
        setUser,
        authenticated,
        setAuthenticated,
        setToken,
     }}>    
     {children}
    </UserStateContext.Provider>
    )
}
export const useUserContext = () => useContext(UserStateContext);