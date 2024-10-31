import { useState } from "react";
import {auth} from '../../firebase/firebase'
const AuthContext = React.createContext();


export function AuthContext({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
};