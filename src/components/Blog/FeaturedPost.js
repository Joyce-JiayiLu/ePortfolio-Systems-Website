import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from "../Button/Button";
import jwt_decode from "jwt-decode";
import {deleteCollection} from "../../api";

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export default function FeaturedPost(props) {
    const classes = useStyles();
    const { post } = props;

    function toUserPortfolio() {
        //console.log(post.userid);
        window.sessionStorage.setItem("spec_userid", post["_id"]);
        window.location.assign(`https://genius-solio.herokuapp.com/userportfolio`);
    }

    console.log(post.userid);
    return (
        <Grid item xs={12} md={6} onClick={() => toUserPortfolio()}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.firstname} {post.lastname}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={post.cover} title={post.imageTitle} />
                    </Hidden>
                </Card>
            </CardActionArea>
            {deleteEnable(post)}
        </Grid>
    );
}

FeaturedPost.propTypes = {
    post: PropTypes.object,
};

function deleteEnable(post){
    var user_token = localStorage.getItem("id_token");
    var userid = jwt_decode(user_token).sub;
    if(post.userid===userid){
        return(
            <Button onClick={()=>deleteCollection(post._id)}>delete</Button>
        )
    }
}