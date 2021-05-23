import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
	link: {
		textDecoration: "none",
		color: "inherit",
    paddingLeft:"60px"
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

function Navbar() {
	const classes = useStyles();

	const [click, setClick] = useState(null);
	const [clickClose, setClickClose] = useState(false);
	const [mobileMoreClick, setMobileMoreClick] = useState(null);

	const isMenuOpen = Boolean(click);
	const isMobileMenuOpen = Boolean(mobileMoreClick);

	const handleMobileMenuClose = () => {
		setMobileMoreClick(click);
	};

	const handleMenuClose = () => {
		setClick(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreClick(event.currentTarget);
	};

	const menuId = "secondary-search-account-menu";
	const renderMenu = (
		<Menu
			click={click}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		></Menu>
	);

	const mobileMenuId = "secondary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			click={mobileMoreClick}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleMobileMenuClose}><a className={classes.link} href="#">About me</a></MenuItem>
			<MenuItem onClick={handleMobileMenuClose}><a className={classes.link}  href="#">Skills</a></MenuItem>
			<MenuItem onClick={handleMobileMenuClose}><a className={classes.link}  href="#">Projects</a></MenuItem>
			<MenuItem onClick={handleMobileMenuClose}><a className={classes.link}  href="#">Contact</a></MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6">
						<a className={classes.link}  href="#" color="inherit">   
              <img style={{width: '45px', position:"absolute", top:"10px", left:"30px"}} src='../assets/Logo_Master_hell.png' alt="logo"/> 
              Cleverttech
            </a>
					</Typography>

					<div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <MenuItem><a className={classes.link}  href="#">About me</a></MenuItem>
                <MenuItem><a className={classes.link}  href="#">Skills</a></MenuItem>
                <MenuItem><a className={classes.link}  href="#">Projects</a></MenuItem>
                <MenuItem><a className={classes.link}  href="#">Contact</a></MenuItem>
              </div>
					
  
					<div className={classes.sectionMobile}>
						<IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen}>
							{click? <CloseIcon/> : <MenuIcon /> }
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>

	);
}

export default Navbar;
