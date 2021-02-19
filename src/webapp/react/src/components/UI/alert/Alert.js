import React from "react";
import PropTypes from 'prop-types';
import MuiAlert from "@material-ui/lab/Alert";

export const Alert = ({message, onClick, severity}) => (
    <MuiAlert elevation={6} variant='filled' onClose={onClick} severity={severity}>
        {message}
    </MuiAlert>
)

Alert.defaultProp = {
    severity: 'success'
}

Alert.propTypes = {
    message: PropTypes.string,
    onClick: PropTypes.func,
}