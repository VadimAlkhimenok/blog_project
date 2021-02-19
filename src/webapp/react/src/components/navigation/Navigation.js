import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import {useParams} from "react-router";

export const Navigation = () => {
    const {id} = useParams();

    return (
        <nav className={classes.Navigation}>
            <ul className={classes.List}>
                <li className={classes.LinkItem}>
                    <NavLink to={`/users/${id}`}
                             className={classes.Link}
                             activeClassName={classes.Active}
                    >
                        Main page
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
