import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import axios from '../../axios';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {instanceOf} from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));
const portfolioTags = [
    { title: 'Art'},
    { title: 'Chemistry'},
    { title: 'Physics'},
    { title: 'Architecture'},
    { title: 'Business'},
    { title: "Law"},
    { title: 'Politics'},
    { title: 'Education'},
    { title: 'Health'},
    { title: 'Biochemical Medicine'},
    { title: 'Computer Science'},
    { title: 'Mathematics & Statistics'},
    { title: 'Gaming'},
    { title: 'Technology'},
    { title: 'Philosophy'},
    { title: 'Marxism'},
    { title: 'Religion'},
    { title: 'History'},
];
export default function Chips(props) {
    const classes = useStyles();
    const selected = props.selected;

    const [tags, setTags] = useState(portfolioTags);

    //setTags(portfolioTags);
    //console.log(tags);
    /*async function getSymptoms() {
        //let response = await axios.get("/symptoms/", {});
        setTags(portfolioTags);
    }*/

    const handleDelete = (tag) => {

        const newSelected = props.selected.filter(e=>{return e!==tag.title})
        props.onChange(newSelected)
    };

    const handleClick = (tag) => {
        console.log(tag);
        const newSelected = [...selected,tag.title]
        if(!props.selected.includes(tag.title)) {
            props.onChange(newSelected)
        }
    };

    let tagComponents = null;
    let current_color = "default"
    if (tags !== undefined && tags.length > 0) {
        tagComponents = tags.map(tag => {

            let enabled = props.selected.includes(tag.title)
            if (props.selected.includes(tag.title)){
                current_color = "primary"
            } else {
                current_color = "default"
            }
            return <Chip
                avatar={<Avatar>{tag.title.substring(0, 1).toUpperCase()}</Avatar>}
                label={tag.title}
                clickable
                color={enabled?"primary":"default"}
                onClick={()=>handleClick(tag)}
                onDelete={()=>handleDelete(tag)}
                deleteIcon={!enabled?<DoneIcon />:null}
            />
        })
    }

    return (
        <div className={classes.root}>
            {tagComponents}
        </div>
    );
}
