import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import {Login} from "../main/auth/login/Login";
import {Registration} from "../main/auth/registration/Registration";
import {PersonalData} from "../main/personal-data/PersonalData";
import {Header} from "../main/header/Header";
import {MainPage} from "../main/main-page/MainPage";

export const Routing = (isLogin, handleLogin, setStatus, authUser, setAuthUser) => {
    if (isLogin) {
        return (
            <>
                <Header authUser={authUser} />
                <Switch>
                    <Route exact path={`/users/${authUser.id}/`}
                           render={props => <MainPage {...props} authUser={authUser} setAuthUser={setAuthUser} />}
                    />
                    <Route exact path={`/users/${authUser.id}/personal-data`}
                           render={props => <PersonalData {...props} authUser={authUser} setAuthUser={setAuthUser} />}
                    />
                    <Redirect to={`/users/${authUser.id}`} />
                </Switch>
            </>
        );
    }

    return (
        <Switch>
            <Route path='/login'
                   render={(props) => <Login {...props} handleLogin={handleLogin} setStatus={setStatus} />}
            />
            <Route path='/registration'
                   render={(props) => <Registration {...props} handleLogin={handleLogin} setStatus={setStatus} />}
            />
            <Redirect to='/login' />
        </Switch>
    );
};