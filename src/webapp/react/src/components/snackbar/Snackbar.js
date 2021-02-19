import React, {useState} from "react";
import PropTypes from 'prop-types';
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "../UI/alert/Alert";

export const CustomizedSnackbar = ({message}) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert message={message} onClick={handleClose} />
        </Snackbar>
    );
}

CustomizedSnackbar.propTypes = {
    message: PropTypes.string.isRequired
}