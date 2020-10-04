import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Recent Deposits</Title>
            <Typography component="p" variant="h4">
                11111
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                33333
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    22222
                </Link>
            </div>
        </React.Fragment>
    );
}