import {makeStyles} from '@material-ui/core/styles';
import topBanner from '../../assets/bbb.jpg';
export const useStyle=makeStyles(theme => ({
    banner: {
        width: "100%",
        backgroundImage: `linear-gradient(
        rgba(0,0,0, 0),
        rgba(0,0,0, 100)
        ),url(${topBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "300px",
    },
    bannerText: {
        display: "flex",
        justifyContent: "center",
        lineHeight: "300px",
        textTransform: "uppercase",
        color: theme.palette.common.white,
    }
}));