import React, {useState} from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

export default function SearchBar() {
    const [query, setQuery] = useState("");
    function searching() {
        window.sessionStorage.setItem("keyword", query);
        window.location.assign("https://genius-solio.herokuapp.com/search");
    }
    const classes = useStyles();
    return (
        <div className={classes.search} >
            <InputBase
                id="Testing"
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={() => searching()}
            >
                <SearchIcon />
            </IconButton>
        </div>
    )
}

function backHomePage(){
    window.location.assign(`https://genius-solio.herokuapp.com/`);
}