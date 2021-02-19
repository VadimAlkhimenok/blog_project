import React from "react";
import PropTypes from 'prop-types';

export const FormControl = ({children}) => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

FormControl.propTypes = {
    children: PropTypes.node.isRequired,
}