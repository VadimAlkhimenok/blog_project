import React, {useState} from "react";
import PropTypes from 'prop-types';
import {FormControl} from "./FormControl";
import {Grid} from "@material-ui/core";
import {Input} from "../UI/input/Input";
import {Btn} from "../UI/button/Button";

export const CommentForm = ({handleAddCommentCancel}) => {
    const [comment, setComment] = useState('');

    const [error, setError] = useState({});

    const validateComment = () => {
        let inputErrors = {};
        inputErrors.comment = comment === '' ? "This field is required!" : null;

        setError({...inputErrors});

        return Object.values(inputErrors).every(x => x === null);
    }

    const handleChangeInput = ({target: {name, value}}) => {
        validateComment();
        setComment(value);
    }

    const handleAddComment = () => {
        // axios post
        if (validateComment()) {
            console.log(comment)
            setComment('');
        }
    }

    return (
        <FormControl>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Input label='Comment'
                           name='comment'
                           onChange={handleChangeInput}
                           error={error}
                           value={comment}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Btn color='primary'
                         title='Add comment'
                         onClick={handleAddComment}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Btn color='secondary'
                         title='Cancel'
                         onClick={handleAddCommentCancel}
                    />
                </Grid>
            </Grid>
        </FormControl>
    )
}

CommentForm.propTypes = {
    handleAddCommentCancel: PropTypes.func.isRequired,
}