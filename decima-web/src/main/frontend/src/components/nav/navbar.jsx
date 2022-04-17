import {useNavigate} from "react-router-dom";
import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {

    const classes = useStyles();
    const navigate = useNavigate();

    function navigateLoginEventHandler(event) {
        event.preventDefault();
        navigate("/login")
    }

    function navigateRegisterEventHandler(event) {
        event.preventDefault();
        navigate("/register")
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} >
                    Decima
                </Typography>
                <Button color="inherit" onClick={navigateLoginEventHandler}>Login</Button>
                <Button color="inherit" onClick={navigateRegisterEventHandler}>Register</Button>
            </Toolbar>
        </AppBar>
    )
}