import React, {useState} from "react";
import PropTypes from 'prop-types';
import classes from './ArticleInfo.module.css';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import {Like} from "../UI/like/Like";
import {Btn} from "../UI/button/Button";
import {CommentForm} from "../controls/CommentForm";
import {Comment} from "../comment/Comment";

export const ArticleInfo = ({open, handleClose, post, handleDislike, handleLike, isDislike, isLike}) => {
    const [isComment, setComment] = useState(false);

    const handleAddComment = () => {
        setComment(true);
    }

    const handleAddCommentCancel = () => {
        setComment(false);
    }

    return (
        <Dialog fullScreen open={open} onClose={handleClose}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {post.title}
                    </Typography>
                </Toolbar>
            </AppBar>

            <div className={classes.main}>
                <div className={classes.description}>
                    {post.description}
                </div>
                <Divider />

                <div className={classes.manage}>
                    <Like color='primary' disabled={isLike} onClick={handleLike}>
                        <ThumbUpAltIcon />
                    </Like>

                    <Like color='secondary' disabled={isDislike} onClick={handleDislike}>
                        <ThumbDownIcon />
                    </Like>

                    <Btn onClick={handleAddComment}
                         color='primary'
                         title='Add a comment'
                         variant='text'
                         fullWidth={false}
                    />
                </div>
                <Divider />

                { isComment ? <CommentForm handleAddCommentCancel={handleAddCommentCancel} /> : null }

                <div className={classes.comments}>
                    { post.comments.map(comment => <Comment key={comment.idcomment} value={comment.description} title={comment.name} />) }
                </div>
            </div>
        </Dialog>
    );
}

ArticleInfo.defaultProps = {
    post: []
}

ArticleInfo.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    isLike: PropTypes.bool.isRequired,
    isDislike: PropTypes.bool.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleDislike: PropTypes.func.isRequired,
};