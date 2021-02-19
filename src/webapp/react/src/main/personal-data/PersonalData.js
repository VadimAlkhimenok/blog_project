import React, {useEffect, useState} from "react";
import classes from './PersonalData.module.css'
import {Title} from "../../components/UI/title/TItle";
import {FormControl} from "../../components/controls/FormControl";
import {Grid} from "@material-ui/core";
import {inputsPersonalData} from "../../components/helpers/common-data/inputsPersonalData";
import {Input} from "../../components/UI/input/Input";
import {Btn} from "../../components/UI/button/Button";
import axios from "axios";
import {CustomizedSnackbar} from "../../components/snackbar/Snackbar";

export const PersonalData = ({authUser, setAuthUser}) => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        biography: '',
    })
    const [status, setStatus] = useState(false);

    useEffect( () => {
        setUser({...user, ...authUser});
    }, [])

    const handleChangeInput = ({target: {name, value}}) => {
        setUser({
            ...user,
            [name]: value,
        })
        setStatus(false);
    }

    const handleClickSave = async () => {
        try {
            await axios.put(`http://localhost:8080/users/${authUser.id}/update`, user);
            const response = await axios.get(`http://localhost:8080/users/${authUser.id}/personal-data`);
            setAuthUser(response.data);
            setStatus(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={classes.personalData}>
            <Title text='Personal Data' />
            <FormControl>
                <Grid container spacing={2}>
                    {
                        inputsPersonalData.map(input => (
                            <Grid item xs={input.grid} key={input.label}>
                                <Input label={input.label}
                                       name={input.name}
                                       type={input.type}
                                       onChange={handleChangeInput}
                                       value={user[input.name]}
                                />
                            </Grid>
                        ))
                    }
                    <Grid item xs={2}>
                        <Btn title='Save'
                             color='secondary'
                             onClick={handleClickSave}
                        />
                    </Grid>
                </Grid>
            </FormControl>
            {status ? <CustomizedSnackbar message='Personal data was updated!' /> : null}
        </div>
    )
}