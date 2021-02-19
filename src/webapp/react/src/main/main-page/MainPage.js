import React, {useEffect, useState} from "react";
import classes from './MainPage.module.css';
import {Sidebar} from "../../components/sidebar/Sidebar";
import {Appbar} from "../../components/app-bar/AppBar";
import Typography from "@material-ui/core/Typography";
import {ArticleInfo} from "../../components/article-info/ArticleInfo";
import {CustomSwitch} from "../../components/UI/switch/Switch";
import {Subcontent} from "../../components/subcontent/Subcontent";
import {Article} from "../../components/article/Article";
import {Alert} from "../../components/UI/alert/Alert";
import axios from "axios";

export const MainPage = ({authUser, setAuthUser}) => {
    const [authors, setAuthors] = useState([{}]);
    const [authorsFavorite, setAuthorsFavorite] = useState([]);
    const [author, setAuthor] = useState({});
    const [post, setPost] = useState([]);
    const [isLike, setLike] = React.useState(false);
    const [isDislike, setDislike] = React.useState(false);

    const [active, setActive] = useState(null);
    const [open, setOpen] = React.useState(false);

    const [subscribe, setSubscribe] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/authors`)
            .then(({data}) => {
                setAuthors(data)
                checkSubscribe();
            })
            .catch(e => console.log(e))
    }, [author])

    const handleClickAuthor = id => () => {
        authors.filter(author => {
            if (author.id === id) {
                setActive(id);
                setAuthor(author);
            }
        })
    }

    const handleOpen = id => () => {
        author.posts.filter(post => {
            if (post.idpost === id) {
                setPost(post);
            }
        })
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleLike = () => {
        setLike(true);
        setDislike(false);
    }

    const handleDislike = () => {
        setDislike(true);
        setLike(false);
    }

    const handleSubscribe = async () => {
        try {
            if (!subscribe) {
                await axios.put(`http://localhost:8080/users/${authUser.id}/subscribe`, {id: author.id});
                setSubscribe(true);
                setAuthorsFavorite([...authorsFavorite, author]);
            } else {
                console.log("not") // ???????????
            }
        } catch (error) {
            console.log(error);
        }
    }

    const checkSubscribe = () => {
        setSubscribe(false)

        if (author.subscribes) {
            author.subscribes.filter(subscriber => (subscriber.subscriber.id === authUser.id) && setSubscribe(true))
        }
    }

    return (
        <div className={classes.main}>
            <div>
                <Sidebar handleClickAuthor={handleClickAuthor}
                         authorsAll={authors}
                         active={active}
                         authorsFavorite={authorsFavorite}
                />
            </div>

            <div className={classes.content}>
                {
                    author.firstName
                        ? <>
                            <Appbar>
                                <Typography variant="h6">{author.firstName}</Typography>
                                <CustomSwitch label='Subscribe' handleSubscribe={handleSubscribe} subscribe={subscribe} />
                            </Appbar>
                            <Subcontent biography={author.biography} countSubscribers={author.subscribes.length} />
                          </>
                        : null
                }

                {
                    author.posts
                        ? <>
                            <div className={classes.articles}>
                                {
                                    author.posts.map(post => (
                                        <Article key={post.idpost}
                                                 value={post.description}
                                                 title={post.title}
                                                 handleOpen={handleOpen}
                                                 handleDislike={handleDislike}
                                                 handleLike={handleLike}
                                                 id={post.idpost}
                                                 isDislike={isDislike}
                                                 isLike={isLike}
                                        />
                                    ))
                                }
                            </div>
                          </>
                        : <Alert message="Choose author!" severity='info' />
                }
            </div>

            {
                open
                    ? <ArticleInfo open={open}
                                   handleClose={handleClose}
                                   post={post}
                                   isLike={isLike}
                                   isDislike={isDislike}
                                   handleLike={handleLike}
                                   handleDislike={handleDislike}
                    />
                    : null
            }
        </div>
    )
}