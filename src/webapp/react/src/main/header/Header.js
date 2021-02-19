import React from "react";
import classes from './Header.module.css';
import {Navigation} from "../../components/navigation/Navigation";
import {User} from "../../components/user/User";

export const Header = ({authUser}) => {
    return (
        <div className={classes.header}>
            <Navigation />
            <User authUser={authUser} />
        </div>
    )
}