import React from "react";
import classes from './User.module.css';
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

export const User = ({authUser}) => {
    return (
        <Link to={`/users/${authUser.id}/personal-data`} className={classes.link}>
            <Typography variant='subtitle2'>{authUser.email}</Typography>
            <AccountBoxIcon fontSize='large' color='primary'  />
        </Link>
    )
}