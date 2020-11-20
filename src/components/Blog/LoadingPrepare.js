import React, {Component} from "react";
import FeaturedPost from "./FeaturedPost";
import Grid from "@material-ui/core/Grid";
import {withRouter} from "react-router-dom";

class LoadingPrepare extends Component {

    render() {
        return(<Grid container spacing={4}>
            {this.props.data.map((post) => (
                <FeaturedPost post={post} />
            ))}
        </Grid>);
    }
}

export default withRouter(LoadingPrepare);