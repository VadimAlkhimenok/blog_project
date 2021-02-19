import React, {useState} from "react";
import PropTypes from 'prop-types';
import classes from './Login.module.css';
import {Grid} from "@material-ui/core";
import {Title} from "../../../components/UI/title/TItle";
import {FormControl} from "../../../components/controls/FormControl";
import {Link} from "react-router-dom";
import {Input} from "../../../components/UI/input/Input";
import {inputsLogin} from "../../../components/helpers/common-data/inputsLogin";
import {isValidEmail} from "../../../components/helpers/validators/isValidEmail";
import {Btn} from "../../../components/UI/button/Button";

export const Login = ({handleLogin, setStatus}) => {
    const [login, setLogin] = useState({
        email: null,
        password: null
    });

    const [error, setError] = useState({});
    const [disabled, setDisabled] = useState(false);

    const validateLogin = () => {
        const {email, password} = login;

        let inputErrors = {};
        inputErrors.email = isValidEmail(email) ? null : "Email is not valid!";
        inputErrors.password = password ? null : "This field is required!";

        setError({...inputErrors});

        return Object.values(inputErrors).every(x => x === null);
    }

    const handleChangeInput = ({target: {name, value}}) => {
        validateLogin(undefined, login.password);
        setLogin({
            ...login,
            [name]: value,
        })
    }

    const handleSubmit = async () => {
        try {
            if (validateLogin(login.email, login.password)) {
                setDisabled(true);
                await handleLogin(login.email, login.password);
                setStatus(true);
            }
        } catch (error) {
            console.log(error);
            setDisabled(false);
        }
    }

    return (
        <div className={classes.login}>
            <Title text="Login form" />
            <FormControl>
                <Grid container spacing={2}>
                    {
                        inputsLogin.map(input => (
                            <Grid item xs={12} key={input.label}>
                                <Input label={input.label}
                                       name={input.name}
                                       type={input.type}
                                       onChange={handleChangeInput}
                                       error={error}
                                       disabled={disabled}
                                />
                            </Grid>
                        ))
                    }

                    <Grid item xs={3}>
                        <Btn title='Sign in'
                             color='primary'
                             onClick={handleSubmit}
                             disabled={disabled}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <Link to='/registration' className={classes.Link}>
                            <Btn title='Registration'
                                 color='secondary'
                                 disabled={disabled}
                            />
                        </Link>
                    </Grid>
                </Grid>
            </FormControl>
        </div>
    )
}

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    setStatus: PropTypes.func.isRequired,
}