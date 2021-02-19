import React from "react";
import PropTypes from 'prop-types';
import classes from './Comment.module.css';
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {Textarea} from "../UI/textarea/Textarea";
import {Btn} from "../UI/button/Button";

export const Comment = ({title, value}) => {
    return (
        <div className={classes.comment}>
            <Typography variant='subtitle1'>{title}</Typography>
            <Grid container>
                <Grid item xs={12}>
                    <Textarea value={value} />
                </Grid>

                <Grid item xs={1}>
                    <Btn title='Edit'
                         color='primary'
                         variant='text'
                    />
                </Grid>

                <Grid item xs={1}>
                    <Btn title='Remove'
                         color='secondary'
                         variant='text'
                    />
                </Grid>
            </Grid>
        </div>
    )
}

Comment.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}