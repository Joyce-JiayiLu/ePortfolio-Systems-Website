const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const title = {
    color: "#3C4858",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
};



const infoStyle = {
    infoArea: {
        maxWidth: "360px",
        margin: "0 auto",
        padding: "0px"
    },
    iconWrapper: {
        float: "left",
        marginTop: "24px",
        marginRight: "10px"
    },
    primary: {
        color: primaryColor
    },
    warning: {
        color: warningColor
    },
    danger: {
        color: dangerColor
    },
    success: {
        color: successColor
    },
    info: {
        color: infoColor
    },
    rose: {
        color: roseColor
    },
    gray: {
        color: grayColor
    },
    icon: {
        width: "36px",
        height: "36px"
    },
    descriptionWrapper: {
        color: grayColor,
        overflow: "hidden"
    },
    title,
    description: {
        color: grayColor,
        overflow: "hidden",
        marginTop: "0px",
        fontSize: "14px"
    },
    iconWrapperVertical: {
        float: "none"
    },
    iconVertical: {
        width: "61px",
        height: "61px"
    }
};

export default infoStyle;
