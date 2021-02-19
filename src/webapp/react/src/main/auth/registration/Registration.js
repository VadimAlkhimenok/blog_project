import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classes from './Registration.module.css';
import {Title} from "../../../components/UI/title/TItle";
import {FormControl} from "../../../components/controls/FormControl";
import {Grid} from "@material-ui/core";
import {inputsRegistration, roles} from "../../../components/helpers/common-data/inputsRegistration";
import axios from "axios";
import {Input} from "../../../components/UI/input/Input";
import {isValidEmail} from "../../../components/helpers/validators/isValidEmail";
import {isPasswordsMatch} from "../../../components/helpers/validators/isPasswordsMatch";
import {SelectForm} from "../../../components/controls/SelectForm";
import {Btn} from "../../../components/UI/button/Button";
import {Link} from "react-router-dom";

export const Registration = ({handleLogin, setStatus}) => {
    const [user, setUser] = useState({
        roles: [{}],
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: null,
        biography: '',
    })

    const [error, setError] = useState({});
    const [disabled, setDisabled] = useState(false);

    const validateRegister = () => {
        const {username, email, password, repeatPassword} = user;

        let inputErrors = {};
        inputErrors.username = username ? null : "This field is required!";
        inputErrors.email = isValidEmail(email) ? null : "Email is not valid!";
        inputErrors.password = isPasswordsMatch(password, repeatPassword) ? null : "Passwords mismatch!";
        inputErrors.repeatPassword = repeatPassword ? null : "This field is required!";

        setError({...inputErrors});

        return Object.values(inputErrors).every(x => x === null);
    }

    const handleChangeInput = ({target: {name, value}}) => {
        validateRegister()
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleChangeSelect = ({target: {value}}) => {
        setUser({
            ...user,
            roles: [{'rolename': value}]
        })
    }

    const handleRegister = async () => {
        const {roles, firstName, lastName, username, email, password} = user;
        try {
            if (validateRegister()) {
                await axios.post("http://localhost:8080/registration", {roles, firstName, lastName, username, email, password});
                setDisabled(true);
                setStatus(true);
                await handleLogin(user.email, user.password);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.registration}>
            <Title text='Register form' />
            <FormControl>
                <Grid container spacing={2}>
                    <SelectForm label="Role"
                                value={user.role}
                                handleChange={handleChangeSelect}
                                items={roles}
                                disabled={disabled}
                    />
                    {
                        inputsRegistration.map(input => (
                            <Grid item xs={6} key={input.label}>
                                <Input name={input.name}
                                       label={input.label}
                                       onChange={handleChangeInput}
                                       error={error}
                                       disabled={disabled}
                                       type={input.type}
                                />
                            </Grid>
                        ))
                    }
                    <Grid item xs={2}>
                        <Btn title='Register'
                             color='secondary'
                             onClick={handleRegister}
                             disabled={disabled}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Link to='/login'>
                            <Btn title='Back' />
                        </Link>
                    </Grid>
                </Grid>
            </FormControl>
        </div>
    )
}

Registration.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    setStatus: PropTypes.func.isRequired,
}