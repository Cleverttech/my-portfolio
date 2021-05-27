import "./App.css";
import {
	Link,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	MenuItem,
	Menu,
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
import FavoriteIcon from "@material-ui/icons/Favorite";
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
		paddingTop: "50px",
		color: theme.palette.secondary.main,
		fontWeight: 400,
	},
	media: {
		height: 0,
		margin: "0px 30px",
		paddingTop: "67.25%", // 16:9
	},
	avatar: {
		backgroundColor: "white",
	},
	large: {
		width: "80%",
		height: "auto",
		margin: "auto",
	},
	avatarImg: {
		width: "100%",
	},
	projectCards: {
		display: "flex",
		justifyContent: "center",
		margin: "40px auto",

		height: "auto",
	},
	contactIcons: {
		width: "2.6em",
		margin: "40px",
	},
	seeMore: {
		margin: "auto",
		marginTop: "20px",
	},
	highlight: {
		color: "#009dff",
	},
}));

function App() {
	const theme = useTheme();
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
			anchorOrigin={{ horizontal: "right", vertical: "top" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
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
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	const innerHero = {
		transitionTimingFunction: "cubic-bezier(.25, .1, .25, 1)",
	};
	const skillsSection = {
		backgroundColor: theme.palette.primary.main,
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	const projectsSection = {
		backgroundColor: "white",
		minHeight: "100vh",
		width: "100vw",
		margin: "auto",
	};
	const projectStyles = {
		margin: "0px 20px",
		flexWrap: "wrap",
		flexDirection: "row",
		display: "flex",
	};
	const contactSection = {
		backgroundColor: theme.palette.primary.main,
		minHeight: "30vh",
	};
	const skillText = {
		color: "white",
		width: "70%",
		padding: "30px",
		justifyContent: "center",
		fontSize: "1.2em",
		lineHeight: "2",
		fontWeight: 200,
	};


	return (
		<div className="App">
			<Grid>
				<div className={classes.grow}>
					<AppBar position="static">
						<Toolbar>
							<Typography className={classes.title} variant="h6">
								<a className={classes.link} href="#hero" color="inherit">
									<img style={{ width: "38px", position: "absolute", top: "16px", left: "15px",fontWeight: 200, }} src="../assets/Logo_Master_hell.png" alt="logo" />
									Cleverttech
								</a>
							</Typography>

							<div className={classes.grow} />
							<div className={classes.sectionDesktop}>
					
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
			<Grid style={heroSection} id="about">
				<Grid style={innerHero}>
					<div className={classes.root}>
						<Avatar alt="Remy Sharp" src="../assets/clever.png" className={classes.large} />
					</div>
					<h1 className={classes.heading} color={theme.palette.secondary.main}>
						Clever Tedeku
					</h1>
					<Typography variant="h5" color={theme.palette.secondary.main} component="h5">
						Full-stack Web Developer
					</Typography>
				</Grid>
			</Grid>
			<Grid style={skillsSection} id="skills">
				<h1 className={classes.heading} color={theme.palette.secondary.main}>
					My Skills
				</h1>
				<p style={skillText}>
					Experience are in the stack:
					<Grid container spacing={3}>
						<Grid item xs={12} lg={6} md={6}>
							<ul>
								<li> Html & CSS</li>
								<li> ReactJS</li>
								<li> Bootstrap</li>
								<li> Google Material UI</li>
								<li> JQuery</li>
							</ul>
						</Grid>
						<Grid item xs={12} lg={6} md={6}>
							<ul>
								<li>NodeJS</li>
								<li>ExpressJS</li>
								<li> APIs</li>
								<li>MongoDB</li>
								<li>Mongoose</li>
							</ul>
						</Grid>
					</Grid>
					I am proficient in the usage of JS libraries and welcome new daily challenges in programming. I am still learning and open to acquiring new
					skills. I am a quick learner, team-oriented and quickly adapt to fast-paced working environments. My work experience have been in both personal
					projects and under the umbrella of a publishing firm where I got the opportunity to work with an amazing team in executing a (
					<Link className={classes.highlight} href="https://weihnachten.aerzteverlag.de" target="_blank">
						{" "}
						Christmas wishes page@Aertzeverlag
					</Link>
					) which I independently coded from scratch plus templating/Typo3 dynamic programming for the relaunch of an existing company client's Website{" "}
					<Link className={classes.highlight} href="https://www.operation-karriere.de/kongresse/die-kongressreihe.html" target="_blank">
						Entire "Kongresse" menu content
					</Link>
					.
				</p>
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
								<CardMedia className={classes.media} image="../assets/topoli-frame.png" title="topoli arts" />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										This is a web application with some content management features where professional artists as mentors get to offer mentorships courses,
										interact with students and also wheere students get to interact with each other.{" "}
									</Typography>
								</CardContent>

								<Typography variant="body2" color="secondary" component="p" className={classes.seeMore}>
									Technologies used:
								</Typography>

								<CardContent>
									<Typography variant="body2" color="textSecondary" paragraph>
										ReactJS, Google Material UI, NodeJS, ExpressJS, Socket.io, CSS, HTML
									</Typography>
									<Link href="https://topoli-arts.herokuapp.com/">
										<Button variant="contained" color="secondary">
											Checkout TopoliArts here
										</Button>
									</Link>
								</CardContent>
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
								<CardMedia className={classes.media} image="../assets/clevermove-frame.png" title="Clever move" />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										This is a web application of a Moving company with the functionalities of customers to be able to book their moving schedules for the admin
										user to have an overview of all booked schedules and be able to accept or decline.
									</Typography>
								</CardContent>

								<Typography variant="body2" color="secondary" component="p" className={classes.seeMore}>
									Technologies used:
								</Typography>

								<CardContent>
									<Typography variant="body2" color="textSecondary" paragraph>
										Handlebars, Bootstrap, NodeJS, ExpressJS, CSS, HTML
									</Typography>
									<Link href="https://clevermove.herokuapp.com/">
										<Button variant="contained" color="secondary">
											Checkout Clever-Move here
										</Button>
									</Link>
								</CardContent>
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
										A very addictive game with increasing difficulty.Dragon slay is about a Mother Dragon trying to avoid Obstacles in her way to save her baby
										dragon who appears only after a minimum score of 5.
									</Typography>
								</CardContent>

								<Typography variant="body2" color="secondary" component="p" className={classes.seeMore}>
									Technologies used:
								</Typography>

								<CardContent>
									<Typography variant="body2" color="textSecondary" paragraph>
										Handlebars, Bootstrap, NodeJS, ExpressJS, CSS, HTML
									</Typography>
									<Link href=" https://cleverttech.github.io/Dragon-slay/" target="_blank">
										<Button variant="contained" color="secondary">
											Checkout Dragon-Slay here
										</Button>
									</Link>
								</CardContent>
							</Card>
						</Paper>
					</Grid>
				</div>
			</Grid>
			<Grid style={contactSection} id="contact">
				<h1 className={classes.heading} color={theme.palette.secondary.main}>
					Contact me here
				</h1>
				<Grid>
					<Link href="https://www.instagram.com/clever_ttech/ ">
						<img className={classes.contactIcons} src="../assets/instagram.png"></img>
					</Link>

					<Link href="https://www.linkedin.com/in/clever-tedeku-84505a127/?senderId=clever-tedeku-84505a127 ">
						<img className={classes.contactIcons} src="../assets/linkedin.png"></img>
					</Link>

					<Link href="https://twitter.com/TedekuClever">
						<img className={classes.contactIcons} src="../assets/twitter.png"></img>
					</Link>
				</Grid>
				<small style={{ color: "#ac7937", marginTop: "20px" }}>
					Made with{" "}
					<span>
						<FavoriteIcon style={{ fontSize: "13px" }} />
					</span>{" "}
					by Clever
				</small>
			</Grid>
		</div>
	);
}

export default App;
