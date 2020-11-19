import React, { useState } from "react";
import cc from "classcat";

import styles from "./Favorite.module.css";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

export default function DeletePost({ onClick, props }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        if (typeof onClick === "function") {
            onClick();
        }

        setActive(!active);
    };

    const generateCoordinate = () => {
        let coordinate = Math.floor(Math.random() * 20) + 5;
        coordinate *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

        return coordinate;
    };

    return (
            <button type="button" className={cc([styles.delete])}>
                <Delete />
            </button>

    );
}
