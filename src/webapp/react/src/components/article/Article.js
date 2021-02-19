import React from "react";
import PropTypes from 'prop-types';
import classes from './Article.module.css';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import {Btn} from "../UI/button/Button";
import {Textarea} from "../UI/textarea/Textarea";
import {Like} from "../UI/like/Like";

export const Article = ({id, handleOpen, title, value, isLike, isDislike, handleLike, handleDislike}) => {
    return (
        <div className={classes.article}>
            <Btn onClick={handleOpen(id)} title={title} color='primary' variant='text' />

            <div className={classes.content}>
                <Textarea value={value} />

                <div className={classes.likes}>
                    <Like color='primary' disabled={isLike} onClick={handleLike}>
                        <ThumbUpAltIcon />
                    </Like>

                    <Like color='secondary' disabled={isDislike} onClick={handleDislike}>
                        <ThumbDownIcon />
                    </Like>
                </div>
            </div>
        </div>
    )
}

Article.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isLike: PropTypes.bool.isRequired,
    isDislike: PropTypes.bool.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleDislike: PropTypes.func.isRequired,
};