import './App.css';
import { Grid } from "@material-ui/core";
import { withRouter, Route, Switch, Link} from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import React, {useState} from "react";
import {AppBar,Toolbar,IconButton,Typography,MenuItem,Menu} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
	link: {
		textDecoration: "none",
		color: "inherit",
    paddingLeft:"40px"
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
  heading : {
    margin : "0px auto",
    padding : "0px auto",
    color: theme.palette.secondary.main
  }
}));


function App() {
  const theme = useTheme()
const classes = useStyles();


const [mobileMoreClick, setMobileMoreClick] = useState(null);

const isMobileMenuOpen = Boolean(mobileMoreClick);

const handleMobileMenuClose = () => {
  setMobileMoreClick(null);
};


const handleMobileMenuOpen = (event) => {
  setMobileMoreClick(event.currentTarget);
};

const mobileMenuId = "primary-search-account-menu-mobile";
const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreClick}
        anchorOrigin={{horizontal: "right", vertical:"top" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ horizontal: "right",vertical:"top"  }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMobileMenuClose}><a className={classes.link}  href="#about">About me</a></MenuItem>
        <MenuItem onClick={handleMobileMenuClose}><a className={classes.link}  href="#skills">Skills</a></MenuItem>
        <MenuItem onClick={handleMobileMenuClose}><a className={classes.link}  href="#projects">Projects</a></MenuItem>
        <MenuItem onClick={handleMobileMenuClose}><a className={classes.link}  href="#contact">Contact</a></MenuItem>
      </Menu>
);

  const heroSection = {
    backgroundColor: "white",
    minHeight:"100vh"
  }
  const aboutSection = {
    backgroundColor: theme.palette.primary.main,
    minHeight:"100vh"
  }
  const skillsSection = {
    backgroundColor: "white",
    minHeight:"100vh"
  }
  const projectsSection = {
    backgroundColor: theme.palette.primary.main,
    minHeight:"100vh"
  }
  const contactSection = {
    backgroundColor: "white",
    minHeight:"100vh"
  }

  return (
    <div className="App">

    <Grid>
    <div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="h6">
						<a className={classes.link}  href="#hero" color="inherit">   
						<img style={{width: '38px', position:"absolute", top:"16px", left:"15px"}} src='../assets/Logo_Master_hell.png' alt="logo"/> 
						Cleverttech
            			</a>
					</Typography>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<MenuItem><a className={classes.link}  href="#about">About me</a></MenuItem>
						<MenuItem><a className={classes.link}  href="#skills">Skills</a></MenuItem>
						<MenuItem><a className={classes.link}  href="#projects">Projects</a></MenuItem>
						<MenuItem><a className={classes.link}  href="#contact">Contact</a></MenuItem>
					</div>
					
  
					<div className={classes.sectionMobile}>
						<IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen}  color="inherit">
						 <MenuIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
    </Grid>
    <Grid style={heroSection} id="hero">

    </Grid>
    <Grid style={aboutSection} id="about">
      <h1 className={classes.heading} color={theme.palette.secondary.main}>About me</h1>

    </Grid>
    <Grid style={skillsSection} id="skills">
    <h1 className={classes.heading} color={theme.palette.secondary.main}>My Skills</h1>

    </Grid>
    <Grid style={projectsSection} id="projects">
    <h1 className={classes.heading} color={theme.palette.secondary.main}>Projects</h1>

    </Grid>
    <Grid style={contactSection} id="contact">
    <h1 className={classes.heading} color={theme.palette.secondary.main}>contact</h1>

    </Grid>
    </div>
  );
}

export default App;
