import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ResumeForm from "./ResumeForm";
import {createCollection} from "../../api";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    buttonLeft: {
        justifyContent: 'flex-front',
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    }
}));

const steps = ['Enter Your Title', 'Choose Your Tag', 'Upload Your Resume', 'Upload Your File'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <ResumeForm />;
        case 3:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const classes = useStyles();
    let title, description, coverUrl, fileUrl, portfolio_value;

    const [activeStep, setActiveStep] = React.useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        if (activeStep === 0) {
            removeSessionStorage();
        }
    });

    const handleNext = () => {
        if (activeStep === 0 && sessionStorage.getItem("title") === null)
        {
            console.log("title is not filled");
            alert("You must fill in the title.")
            setActiveStep(0);
            return;
        }

        if (activeStep === 0 && sessionStorage.getItem("coverIsUploaded") === "false")
        {
            console.log("cover is not uploaded");
            alert("You must upload the cover image.")
            setActiveStep(0);
            return;
        }

        if (activeStep === 1 && sessionStorage.getItem("portfolio_value") === null)
        {
            console.log("tags are not filled");
            alert("You must select at least one tag.")
            setActiveStep(1);
            return;
        }

        if (activeStep === 2 && sessionStorage.getItem("resumeIsUploaded") === "false")
        {
            console.log("resume is not uploaded");
            setActiveStep(2);
            alert("You must upload one resume.")
            return;
        }

        if (activeStep === 3 && sessionStorage.getItem("fileIsUploaded") === "false")
        {
            console.log("file is not uploaded");
            setActiveStep(3);
            alert("You must upload your e-portfolio.")
            return;
        }

        if (activeStep === steps.length - 1) {
            createCollection();
            removeSessionStorage();
        }
        setActiveStep(activeStep + 1);
        console.log("active step: ", activeStep);
    };


    function removeSessionStorage() {
        title = sessionStorage.getItem("title")
        description = sessionStorage.getItem("description")
        coverUrl = sessionStorage.getItem("coverUrl")
        fileUrl = sessionStorage.getItem("fileUrl")
        portfolio_value = sessionStorage.getItem("portfolio_value")

        console.log("title: ", title)
        console.log("description: ", description)
        console.log("coverUrl: ", coverUrl)
        console.log("fileUrl: ", fileUrl)
        console.log("portfolio_value: ", portfolio_value)

        sessionStorage.removeItem("title")
        sessionStorage.removeItem("description")
        sessionStorage.removeItem("portfolio_value")
        sessionStorage.removeItem("coverUrl")
        sessionStorage.removeItem("fileUrl")
        sessionStorage.removeItem("resumeUrl")
        sessionStorage.removeItem("resumeIsUploaded")
        sessionStorage.removeItem("fileIsUploaded")
        sessionStorage.removeItem("coverIsUploaded")
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        if (activeStep === 0){
            sessionStorage.removeItem("title")
        }
        if (activeStep === 1){
            sessionStorage.removeItem("portfolio_value")
            sessionStorage.removeItem("description")
        }
    };

    const cancel = () => {
        window.location.assign("https://genius-solio.herokuapp.com/portfoliocollections")
    }

    return (
        <React.Fragment>
            <CssBaseline />
            {/*{<AppBar position="absolute" color="default" className={classes.appBar}>*/}
            {/*    <Toolbar>*/}
            {/*        <Typography align='center' variant="h6" color="inherit" noWrap >*/}
            {/*            Submit Your Portfolio!*/}
            {/*        </Typography>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>}*/}
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Submit Your Portfolio
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Congratulations, your submission is successful.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your portfolio shall be displayed in Design Square soon.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={cancel}
                                        className={classes.buttonLeft}
                                    >
                                        {'Cancel'}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    );
}