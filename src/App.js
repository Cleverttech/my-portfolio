import "./App.css";
import {
	Link,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	MenuItem,
	Menu,
	Collapse,
	Avatar,
	Grid,
	Paper,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	CardMedia,
	Button,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	link: {
		textDecoration: "none",
		color: "inherit",
		paddingLeft: "40px",
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
	heading: {
		margin: "0px auto",
		padding: "0px auto",
		color: theme.palette.secondary.main,
	},
	media: {
		height: 0,
    margin: "0px 30px",
		paddingTop: "67.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: "white",
	},
	avatarImg: {
		width: "100%",
	},
	projectCards: {
		display: "flex",
		justifyContent: "center",
    margin: "40px auto",
	},
}));

function App() {
	const theme = useTheme();
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

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
				<a className={classes.link} href="#about">
					About me
				</a>
			</MenuItem>
			<MenuItem onClick={handleMobileMenuClose}>
				<a className={classes.link} href="#skills">
					Skills
				</a>
			</MenuItem>
			<MenuItem onClick={handleMobileMenuClose}>
				<a className={classes.link} href="#projects">
					Projects
				</a>
			</MenuItem>
			<MenuItem onClick={handleMobileMenuClose}>
				<a className={classes.link} href="#contact">
					Contact
				</a>
			</MenuItem>
		</Menu>
	);

	const heroSection = {
		backgroundColor: "white",
		minHeight: "100vh",
	};
	const aboutSection = {
		backgroundColor: theme.palette.primary.main,
		minHeight: "100vh",
	};
	const skillsSection = {
		backgroundColor: "white",
		minHeight: "100vh",
	};
  const contactSection = {
    backgroundColor: "white",
    minHeight: "100vh",
  };
	const projectsSection = {
		backgroundColor: theme.palette.primary.main,
		minHeight: "100vh",
		width: "100vw",
    margin:"auto",
	};
	const projectStyles = {
    margin: "0px 20px",
    flexWrap : "wrap",
    flexDirection : "row",
    display: "flex",
	};

	return (
		<div className="App">
			<Grid>
				<div className={classes.grow}>
					<AppBar position="static">
						<Toolbar>
							<Typography className={classes.title} variant="h6">
								<a className={classes.link} href="#hero" color="inherit">
									<img style={{ width: "38px", position: "absolute", top: "16px", left: "15px" }} src="../assets/Logo_Master_hell.png" alt="logo" />
									Cleverttech
								</a>
							</Typography>

							<div className={classes.grow} />
							<div className={classes.sectionDesktop}>
								<MenuItem>
									<a className={classes.link} href="#about">
										About me
									</a>
								</MenuItem>
								<MenuItem>
									<a className={classes.link} href="#skills">
										Skills
									</a>
								</MenuItem>
								<MenuItem>
									<a className={classes.link} href="#projects">
										Projects
									</a>
								</MenuItem>
								<MenuItem>
									<a className={classes.link} href="#contact">
										Contact
									</a>
								</MenuItem>
							</div>

							<div className={classes.sectionMobile}>
								<IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
									<MenuIcon />
								</IconButton>
							</div>
						</Toolbar>
					</AppBar>
					{renderMobileMenu}
				</div>
			</Grid>
			<Grid style={heroSection} id="hero"></Grid>
			<Grid style={aboutSection} id="about">
				<h1 className={classes.heading} color={theme.palette.secondary.main}>
					About me
				</h1>
			</Grid>
			<Grid style={skillsSection} id="skills">
				<h1 className={classes.heading} color={theme.palette.secondary.main}>
					My Skills
				</h1>
			</Grid>
			
      <Grid style={projectsSection} id="projects">
				<h1 className={classes.heading} color={theme.palette.secondary.main}>
					Projects
				</h1>
        <div style={projectStyles}>
        <Grid className={classes.projectCards}>
					<Paper elevation={20}>
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<Avatar aria-label="recipe" className={classes.avatar}>
										<img className={classes.avatarImg} src="../assets/Topoli_Master_black.png"></img>
									</Avatar>
								}
								title="Topoli Arts"
								subheader="Delivered on: May 21, 2021"
							/>
							<CardMedia className={classes.media} image="../assets/topoli-frame.png" title="Paella dish" />
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									This is a web application with some content management features where professional artists as mentors get to offer mentorships courses,
									interact with students and also wheere students get to interact with each other.{" "}
								</Typography>
							</CardContent>
							<Link href="https://topoli-arts.herokuapp.com/">
								<Button variant="contained" color="secondary">
									Checkout TopoliArts here
								</Button>
							</Link>
							<CardActions disableSpacing>
								<Typography variant="body2" color="black" component="p">
									Read more about this project
								</Typography>
								<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: expanded,
									})}
									onClick={handleExpandClick}
									aria-expanded={expanded}
									aria-label="show more"
								>
									<ExpandMoreIcon />
								</IconButton>
							</CardActions>
							<Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography variant="body2" color="secondary" paragraph>
										Technologies used:
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										ReactJS, Google Material UI, NodeJS, ExpressJS, Socket.io, CSS, HTML
									</Typography>
									<Typography variant="body2" color="secondary" paragraph>
										Some cool features:
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										<ul>
											<li>
												{" "}
												Three different user types with different functionalities and profile pages (owner, mentor, student) <br></br>
											</li>
											<li>
												{" "}
												Mentors can dynamically create courses and a portfolio <br></br>
											</li>
											<li>
												Private and global chatrooms, Awesome loading page <br></br>
											</li>
											<li>Client and server-side form validations.</li>
										</ul>
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										Together with my project partner, we planned, designed and hardcoded the various features of this amazing application. The coding experience
										was fun every step of the way.
									</Typography>
								</CardContent>
							</Collapse>
						</Card>
					</Paper>
				</Grid>
				<Grid className={classes.projectCards}>
					<Paper elevation={20}>
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<Avatar aria-label="full-stack app" className={classes.avatar}>
										<img className={classes.avatarImg} src="../assets/logo.png"></img>
									</Avatar>
								}
								title="Clever Move"
								subheader="Delivered on: April 30, 2021"
							/>
							<CardMedia className={classes.media} image="../assets/clevermove-frame.png" title="topoli arts" />
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									This is a web application of a Moving company with the functionalities of customers to be able to book their moving schedules for the admin user to have an overview of all booked schedules and be able to accept or decline.
								</Typography>
							</CardContent>
							<Link href="https://clevermove.herokuapp.com/">
								<Button variant="contained" color="secondary">
									Checkout Clever-Move here
								</Button>
							</Link>
							<CardActions disableSpacing>
								<Typography variant="body2" color="black" component="p">
									Read more about this project
								</Typography>
								<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: expanded,
									})}
									onClick={handleExpandClick}
									aria-expanded={expanded}
									aria-label="show more"
								>
									<ExpandMoreIcon />
								</IconButton>
							</CardActions>
							<Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography variant="body2" color="secondary" paragraph>
										Technologies used:
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										Handlebars, Bootstrap, NodeJS, ExpressJS, CSS, HTML
									</Typography>
									<Typography variant="body2" color="secondary" paragraph>
										Some cool features:
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										<ul>
											<li>
												{" "}
												Two different user types with different functionalities and profile pages (admin, customer) <br></br>
											</li>
											<li>
												{" "}
												Customers can book schedules via a form <br></br>
											</li>
									
											<li>The Admin user has an overview of all schedules and is able to accept or decline a booking</li>
										</ul>
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										Together with my project partner, we planned, designed and hardcoded the various features of this useful application. The coding experience amazing.							
									</Typography>
								</CardContent>
							</Collapse>
						</Card>
					</Paper>
				</Grid>
				<Grid className={classes.projectCards}>
					<Paper elevation={20}>
						<Card className={classes.root}>
							<CardHeader
								avatar={
									<Avatar aria-label="game" className={classes.avatar}>
										<img className={classes.avatarImg} src="../assets/mother2.png"></img>
									</Avatar>
								}
								title="Dragon Slay"
								subheader="Delivered on: April 9, 2021"
							/>
							<CardMedia className={classes.media} image="../assets/dragonslay-frame.png" title="Dragon slay" />
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
                A very addictive game with increasing difficulty.Dragon slay is about a Mother Dragon trying to avoid Obstacles in her way to save her baby dragon who appears only after a minimum score of 5.
								</Typography>
							</CardContent>
							<Link href=" https://cleverttech.github.io/Dragon-slay/ ">
								<Button variant="contained" color="secondary">
									Checkout Dragon-Slay here
								</Button>
							</Link>
							<CardActions disableSpacing>
								<Typography variant="body2" color="black" component="p">
									Read more about this project
								</Typography>
								<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: expanded,
									})}
									onClick={handleExpandClick}
									aria-expanded={expanded}
									aria-label="show more"
								>
									<ExpandMoreIcon />
								</IconButton>
							</CardActions>
							<Collapse in={expanded} timeout="auto" unmountOnExit>
								<CardContent>
									<Typography variant="body2" color="secondary" paragraph>
										Technologies used:
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										Handlebars, Bootstrap, NodeJS, ExpressJS, CSS, HTML
									</Typography>
									<Typography variant="body2" color="secondary" paragraph>
										Some cool features:
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										<ul>
											<li>
												{" "}
												Two different user types with different functionalities and profile pages (admin, customer) <br></br>
											</li>
											<li>
												{" "}
												Customers can book schedules via a form <br></br>
											</li>
									
											<li>The Admin user has an overview of all schedules and is able to accept or decline a booking</li>
										</ul>
									</Typography>
									<Typography variant="body2" color="black" paragraph>
										Together with my project partner, we planned, designed and hardcoded the various features of this useful application. The coding experience amazing.							
									</Typography>
								</CardContent>
							</Collapse>
						</Card>
					</Paper>
				</Grid>			
        </div>
		</Grid>
			<Grid style={contactSection} id="contact">
				<h1 className={classes.heading} color={theme.palette.secondary.main}>
					contact
				</h1>
			</Grid>
		</div>
	);
}

export default App;
