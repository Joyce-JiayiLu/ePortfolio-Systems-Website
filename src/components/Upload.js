import React,{useState}from "react";
import {updateimage, useUsers} from "../api"
import UploadImageButton from "./Button/UploadImageButton";
import PersonIcon from "@material-ui/icons/Person";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";
import jwt_decode from "jwt-decode";
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3),
        position: "relative"
    },
    large: {
        width: theme.spacing(34),
        height: theme.spacing(34),
    },
}));

export default function Upload() {

    const {users} = useUsers();
    let img;
    let user_token = localStorage.getItem("id_token");
    let user_sub = jwt_decode(user_token).sub;
    {users.map(user => {
        if(user.userid===user_sub){
            img = user.image;
        }})}

    const classes = useStyles();
    const [image,setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const hiddenFileInput = React.useRef(null);

    let selectedFile;

    const onClickHandler = event => {
        hiddenFileInput.current.click();
    };

    const fileSelectedHandler = event => {
        selectedFile = event.target.files[0];
        console.log(event.target.files[0]);
    };

    // send the picture to database.
    const uploadImage = async e => {
        const data = new FormData();

        data.append('file', selectedFile);
        data.append('upload_preset', 'xuxuxue');

        setLoading(true);

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dzkvgzgjh/image/upload',
            {
                method: 'POST',
                body: data
            }
        );

        const file = await res.json();

        setImage(file.secure_url);
        console.log(file.secure_url);
        setLoading(false);
        await updateimage(file.secure_url);
    };

    // This allows users to upload or change their photo.
    return(
        <div>
            <IconButton title="Change Profile Image" color="inherit" onClick={onClickHandler}>
            <Avatar className={classes.imagePosition} alt="" src={img} className={classes.large}/>
            </IconButton>
            <input ref={hiddenFileInput} type="file" name ="file" placeholder="Upload an image" onChange={fileSelectedHandler} style={{display:'none'}}/>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<PersonIcon />}
                onClick={uploadImage}>
                Upload Image
            </Button>
        </div>
    );
}


