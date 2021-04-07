import {makeStyles} from '@material-ui/core/styles';
export const useStyle=makeStyles(theme => ({
    mainTitle: {
        marginTop: theme.spacing(3),
        textAlign: "center",
        marginBottom: theme.spacing(3)
    },
    productImage: {
        width: "100%",
        objectFit: "cover",
        // position: "relative",
    },
    productPrice: {
        color: theme.palette.grey[700],
        fontSize: "22px",
        textAlign: "right",
        marginBottom: theme.spacing(2)
    },
    productStatus: {
        position: "relative",
    },
    productTitle: {
        position: "absolute",
        top: 0
    },
    hot: {
        backgroundColor: "red",
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        color: theme.palette.common.white,
    },
    new: {
        backgroundColor: "green",
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        color: theme.palette.common.white,
    }

}));