import "./App.css"; 
import { Link, AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Avatar, Grid } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
        <a href="#skills" style={{ color: "#252a2d", textDecoration: "none" }}>Skills</a>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <a href="#projects" style={{ color: "#252a2d", textDecoration: "none" }}>Projects</a>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <a href="#contact" style={{ color: "#252a2d", textDecoration: "none" }}>Contact</a>
      </MenuItem>
    </Menu>
  );


  const heroSection = {
    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const skillsSection = {
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "70px",
  };

  const skillText = {
    color: "white",
    width: "85%",
    margin: "auto",
    fontSize: "1.2em",
    lineHeight: "2",
    fontWeight: 200,
  };

  const projectsSection = {
    backgroundColor: "white",
    minHeight: "100vh",
    width: "100vw",
    margin: "auto",
    paddingBottom: "70px",
  };


  const contactSection = {
    backgroundColor: theme.palette.primary.main,
    minHeight: "30vh",
  };

  return (
    <div className="App">
      <Grid>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, paddingLeft: "40px", fontWeight: "light" }}>
              <img style={{ width: "38px", position: "absolute", top: "16px", left: "15px" }} src="../assets/Logo_Master_hell.png" alt="logo" />
              Cleverttech
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <div style={{ display: "none", [theme.breakpoints.up("md")]: { display: "flex" } }}>
              <MenuItem>
                <Link href="#skills" style={{ color: "white", textDecoration: "none" }}>Skills</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
              </MenuItem>
            </div>
            <div style={{ display: "flex", [theme.breakpoints.up("md")]: { display: "none" } }}>
              <IconButton onClick={handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </Grid>

      <Grid style={heroSection} id="about">
        <div>
          <Avatar alt="clever Img" src="../assets/clever.png" style={{ width: "30%", height: "auto", margin: "auto", color:"black"}} />
          <Typography variant="h5" style={{ paddingTop: "50px", color: theme.palette.secondary.main, fontWeight: 400 }}>
            My name is Clever D. Derenbach
          </Typography>
          <Typography variant="h5" color={theme.palette.secondary.main}>
            Software Developer
          </Typography>
          <Typography variant="caption" color={theme.palette.secondary.main}>
            <Typewriter
              words={["Today I choose to be better than I was yesterday", "_my daily motivation", "React Enthusiast"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
        </div>
      </Grid>

      <Grid style={skillsSection} id="skills">
        <h1 style={{ color: theme.palette.secondary.main, fontWeight: 400 }}>About me and my skills</h1>
        <p style={skillText}>
          My name is Clever and yes that's my real name :). I am usually considered by most people to be personable, sympathetic,
          eager to learn and work really well with people from diverse cultures and backgrounds.
          The fun facts about me are, I love to cook and listen to trap music.
        </p>
        <p style={skillText}>
          My range of expertise are in the stack:
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} md={6}>
              <ul>
                <li>HTML & CSS (still rocking the basics like a boss 💅)</li>
                <li>React (because component-based UI is my jam 🎨)</li>
                <li>TypeScript (bringing type safety and sanity to my JavaScript life 🤓)</li>
                <li>Appium (testing Android apps like a mobile ninja 📱🤺)</li>
                <li>Playwright (end-to-end testing with style and speed 🚀)</li>
                <li>MySQL & MariaDB (keeping data relationships healthier than ever ❤️)</li>
                <li>Jenkins (CI/CD pipelines? Built and deployed like a pro 🤖)</li>
              </ul>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <ul>
                <li>Docker (containerizing everything like it's Tupperware for tech 🐳)</li>
                <li>Fundamentals of AWS (dabbling in the cloud, one service at a time ☁️)</li>
                <li>Fundamentals of Java (because classic never goes out of style ☕)</li>
                <li>Python (data, AI, scripts—you name it, I code it 🐍)</li>
                <li>REST & GraphQL APIs (connecting apps like a digital matchmaker 💻❤️)</li>
              </ul>
            </Grid>
          </Grid>
          <p>
            I’m a versatile developer who codes with flair and purpose. Oh, and did I mention my love for automated testing with Appium and Playwright?
            I’m here to keep things efficient, adaptable, and just a little bit fabulous. Let’s make magic happen! 💪✨
          </p>
        </p>
      </Grid>

      <Grid style={projectsSection} id="projects">
        <h1 style={{ color: theme.palette.secondary.main, fontWeight: 400 }}>Projects</h1>
      <ProjectCards />
     </Grid>

      <Grid style={contactSection} id="contact">
        <h1 style={{ color: theme.palette.secondary.main, fontWeight: 400 }}>Contact me here</h1>
        <Grid>
          {/* Contact Icons */}
        </Grid>
        <small style={{ color: "#ac7937", marginTop: "20px" }}>
          Made with <FavoriteIcon style={{ fontSize: "13px" }} /> by Clever
        </small>
      </Grid>
    </div>
  );
};

export default App;

