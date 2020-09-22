import React,{useState}from "react";
import {updateimage} from "../api"
import UploadImageButton from "./Button/UploadImageButton";
import PersonIcon from "@material-ui/icons/Person";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Upload() {

    const classes = useStyles();
    const [image,setImage] = useState('');
    const [loading, setLoading] = useState(false);

    var selectedFile;

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
            <input type="file" name ="file" placeholder="Upload an image" onChange={fileSelectedHandler}/>
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


