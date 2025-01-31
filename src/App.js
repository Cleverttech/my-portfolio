import "./App.css";
import { Link, AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Avatar, Grid, Box, List, ListItem } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import ProjectCards from "./ProjectCards"

const App = () => {
  const theme = useTheme();
  const [mobileMoreClick, setMobileMoreClick] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreClick);



  const handleMobileMenuClose = () => {
    setMobileMoreClick(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreClick(event.currentTarget);
  };
  const useStyles = (theme) => ({
    heroSection: {
      backgroundColor: "white",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    skillsSection: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px",
    },
    skillText: {
      color: "white",
      width: "85%",
      margin: "auto",
      fontSize: "1.2em",
      lineHeight: "2",
      fontWeight: 200,
    },
    projectsSection: {
      backgroundColor: "white",
      minHeight: "100vh",
      width: "100vw",
      margin: "auto",
      padding: "50px",
    },
    contactSection: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "30vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      py: 2,
    },
    textColor: {
      color: "white",
      display: 'flex', flexDirection: 'column', alignItems: 'center'
    },
    linkStyle: {
      color: "white", textDecoration: "none"
    },
    iconButton: { display: "flex", [theme.breakpoints.up("md")]: { display: "none" } },
    imgStyle: { width: "38px", position: "absolute", top: "16px", left: "15px" },
    titleStyle: { flexGrow: 1, paddingLeft: "40px", fontWeight: "light" },
    typoStyle: { color: theme.palette.secondary.main, fontWeight: 400 }
    , menuLinkStyle: { color: "#252a2d", textDecoration: "none" }, 
    listStyle: { display: 'flex', flexDirection: 'column', alignItems: 'center' }
  })
  const classes = useStyles(theme);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreClick}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <a href="#skills" style={classes.menuLinkStyle}>Skills</a>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <a href="#projects" style={classes.menuLinkStyle}>Projects</a>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <a href="#contact" style={classes.menuLinkStyle}>Contact</a>
      </MenuItem>
    </Menu>
  );


  return (

    <div className="App">
      <Grid>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={classes.titleStyle}>
              <img style={classes.imgStyle} src="../assets/Logo_Master_hell.png" alt="logo" />
              Cleverttech
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <div style={{ display: "none", [theme.breakpoints.up("md")]: { display: "flex" } }}>
              <MenuItem>
                <Link href="#skills" style={classes.linkStyle}>Skills</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#projects" style={classes.linkStyle}>Projects</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#contact" style={classes.linkStyle}>Contact</Link>
              </MenuItem>
            </div>
            <div style={classes.iconButton}>
              <IconButton onClick={handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Grid>

      <Grid style={classes.heroSection} id="about">
        <div>
          <Avatar alt="clever Img" src="../assets/clever.png" style={{ width: "30%", height: "auto", margin: "auto", color: "black" }} />
          <Typography variant="h5" style={{ paddingTop: "50px", color: theme.palette.secondary.main, fontWeight: 400 }}>
            My name is Clever D. Derenbach
          </Typography>
          <Typography variant="h5" color="black">
            Software Developer
          </Typography>
          <Typography variant="caption" color="black">
            <Typewriter
              words={["Today I choose to be better than I was yesterday", "_my daily motivation", "React Enthusiast"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </Typography>
        </div>
      </Grid>


      <Grid style={classes.skillsSection} id="skills">
        <Typography variant="h4" style={classes.typoStyle}>
          About Me and My Skills
        </Typography>

        <Typography style={classes.skillText}>
          My name is Clever, and yes, that's my real name! 😊 I am personable, eager to learn, and work well with people
          from diverse backgrounds. Fun fact: I love to cook and listen to trap music. 🎶
        </Typography>

        <Typography variant="h5" color={theme.palette.secondary.main} fontWeight={500} gutterBottom>
          My Areas of Expertise
        </Typography>

        <Grid container spacing={3}>
          {/* Frontend Development */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color={theme.palette.secondary.main}>Frontend Development</Typography>
              <List>
                <ListItem sx={classes.textColor}>- HTML & CSS</ListItem>
                <ListItem sx={classes.textColor}>- React (because component-based UI is my jam 🎨)</ListItem>
                <ListItem sx={classes.textColor}>- TypeScript (bringing type safety and sanity to my JavaScript life 🤓)</ListItem>
              </List>
            </Box>
          </Grid>

          {/* Backend & Databases */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color={theme.palette.secondary.main}> Backend & Databases</Typography>
              <List sx={classes.listStyle}>
                <ListItem sx={classes.textColor}>- MySQL & MariaDB </ListItem>
                <ListItem sx={classes.textColor}>- Fundamentals of Java </ListItem>
                <ListItem sx={classes.textColor}>- Fundamentals of Python (data, currently learning AI 🐍)</ListItem>
              </List>
            </Box>
          </Grid>

          {/* Testing & Automation */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color={theme.palette.secondary.main}>Testing & Automation</Typography>
              <List>
                <ListItem sx={classes.textColor}>- Appium (testing Android apps)</ListItem>
                <ListItem sx={classes.textColor}>- Playwright (end-to-end testing with style and speed 🚀)</ListItem>
              </List>
            </Box>
          </Grid>

          {/* DevOps & Cloud */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" color={theme.palette.secondary.main}>DevOps & Cloud</Typography>
              <List>
                <ListItem sx={classes.textColor}>- Jenkins (CI/CD pipelines? )</ListItem>
                <ListItem sx={classes.textColor}>- Docker </ListItem>
                <ListItem sx={classes.textColor}>- Kubernetes</ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>

        <Typography style={classes.skillText}>
          I’m a versatile developer who codes with flair and purpose. Oh, and did I mention my love for automated
          testing? Keeping things efficient and adaptable✨
        </Typography>
      </Grid>
      <Grid style={classes.projectsSection} id="projects">
        <h1 style={classes.typoStyle}>Projects</h1>
        <ProjectCards />
      </Grid>


      <Box
        component="footer"
       id="contact"
        sx={classes.contactSection}
      >
        <Typography variant="body1">© 2025 Clever. All rights reserved.</Typography>
        {/* Social Media Icons */}
        <Box sx={{ mt: 1 }}>
          <IconButton href="https://www.linkedin.com/in/clever-dzifa-derenbach-84505a127/" target="_blank" sx={{ color: "white" }}>
            <LinkedIn />
          </IconButton>
          <IconButton href="https://github.com/Cleverttech" target="_blank" sx={{ color: "white" }}>
            <GitHub />
          </IconButton>
          <IconButton sx={{ color: "white" }} href="mailto:clevertedeku@gmail.com" target="_blank">
            <Email />
          </IconButton>
        </Box>
        <small style={{ color: "#ac7937", marginTop: "20px" }}>
          Made with <FavoriteIcon style={{ fontSize: "13px" }} /> by Clever
        </small>
      </Box>
    </div>
  );
};

export default App;

