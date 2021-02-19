import React, {useState} from "react";
import classes from './App.module.css';
import {Routing} from "./routing/Routing";
import {CustomizedSnackbar} from "./components/snackbar/Snackbar";
import axios from "axios";

export const App = () => {
    const [isLogin, setLogin] = useState(false);
    const [status, setStatus] = useState(false);
    const [authUser, setAuthUser] = useState({});

    const handleLogin = async (email, password) => {
        try {
            const response = await axios.get("http://localhost:8080/login", {headers: {authorization: 'Basic ' + window.btoa(email + ":" + password)}});
            setAuthUser(response.data);
            setLogin(true)
        } catch (error) {
            console.log(error)
        }
    }

    const routes = Routing(isLogin, handleLogin, setStatus, authUser, setAuthUser);

    return (
        <div className={classes.container}>
            {routes}
            {status ? <CustomizedSnackbar message='Welcome to the system!' /> : null}
        </div>
    )
}
