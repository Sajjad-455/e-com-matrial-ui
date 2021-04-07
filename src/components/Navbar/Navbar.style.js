import {makeStyles} from '@material-ui/core/styles';
export const useStyle=makeStyles(theme => ({
    logo: {
        flexGrow: 1,
        "& a": {
            textDecoration: "none",
            color: theme.palette.common.white
        },
    },

    cartItem: {
        padding: theme.spacing(1),
        marginLeft: theme.spacing(2),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.info.dark,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        fontSize: "20px",
        textAlign: "center",
        lineHeight: "20px",
    },
    root: {
        display: "flex",
        alignItems: "center"
    },
    shoopingCart: {
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: theme.palette.common.white
        },
    }
}));