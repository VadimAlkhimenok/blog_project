import React from "react";
import classes from './Textarea.module.css';
import {TextareaAutosize} from "@material-ui/core";

export const Textarea = ({value}) => {
    return (
        <TextareaAutosize
            rowsMax={7}
            rowsMin={5}
            value={value}
            className={classes.textarea}
            disabled
        />
    )
}