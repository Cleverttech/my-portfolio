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
	CardMedia,
	Button,
} from "@material-ui/core";
import Typist from 'react-typist';
import { useTheme, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
        link:{
	   color:"white",
	   textDecoration:"none",
        },
           linkMobile:{
	   color:"#252a2d",
	   textDecoration:"none",
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
		textDecoration: "none",
		color: "inherit",
		paddingLeft: "40px",
		fontWeight: "light",
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
		width: "70%",
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
		margin: "20px",
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
				<a className={classes.linkMobile} href="#skills">
					Skills
				</a>
			</MenuItem>
			<MenuItem onClick={handleMobileMenuClose}>
				<a className={classes.linkMobile} href="#projects">
					Projects
				</a>
			</MenuItem>
			<MenuItem onClick={handleMobileMenuClose}>
				<a className={classes.linkMobile} href="#contact">
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

	const skillsSection = {
		backgroundColor: theme.palette.primary.main,
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingBottom:"70px",
	};
	const skillText = {
		color: "white",
		width: "85%",
		margin:"auto",
		fontSize: "1.2em",
		lineHeight: "2",
		fontWeight: 200,
	};
	const projectsSection = {
		backgroundColor: "white",
		minHeight: "100vh",
		width: "100vw",
		margin: "auto",
		paddingBottom:"70px",
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
	
	return (
		<div className="App">
			<Grid>
				<div className={classes.grow}>
					<AppBar position="static">
						<Toolbar>
							<Typography className={classes.title} variant="h6">

									<img style={{ width: "38px", position: "absolute", top: "16px", left: "15px" }} src="../assets/Logo_Master_hell.png" alt="logo" />
									Cleverttech
					
							</Typography>

							<div className={classes.grow} />
							<div className={classes.sectionDesktop}>
					
								<MenuItem>
									<Link className={classes.link} href="#skills">
										Skills
									</Link>
								</MenuItem>
								<MenuItem>
									<Link className={classes.link} href="#projects">
										Projects
									</Link>
								</MenuItem>
								<MenuItem>
									<Link className={classes.link} href="#contact">
										Contact
									</Link>
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
				<Grid >
					<div className={classes.root}>
						<Avatar alt="clever Img" src="../assets/clever.png" className={classes.large} />
					</div>
					<Typist>
					<Typography variant="h5" className={classes.heading} color={theme.palette.secondary.main}>
						My name is Clever D. Derenbach
					</Typography>
			    	<Typist.Delay ms={500} />
				        <br />
			          	<Typography variant="h5" color={theme.palette.secondary.main} >
						Software Developer
					</Typography>
					<Typography variant="caption" color={theme.palette.secondary.main} >
						"Today I choose to be better than I was yesterday"  <br />
						 _my daily motivation
				       </Typography>
				  </Typist>
				</Grid>
			</Grid>
		
			<Grid style={skillsSection} id="skills">
				<h1 className={classes.heading} color={theme.palette.secondary.main}>
					About me and my skills
				</h1>
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
								<li> Html & CSS</li>
								<li> ReactJS</li>
                                                                <li> TypeScript</li>
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
										<Avatar aria-label="topoli" className={classes.avatar}>
											<img className={classes.avatarImg} src="../assets/topoli-logo.png" alt="topoliarts" loading="lazy"></img>
										</Avatar>
									}
									title="Topoli Arts"
									subheader="Delivered on: May 21, 2021"
								/>
								<CardMedia className={classes.media} image="../assets/topoli-frame.png" title="topoli arts" />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										This is a web application with some content management features where professional artists as mentors get to offer mentorships courses,
										interact with students and also where students get to interact with each other.{" "}
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
											<img className={classes.avatarImg} src="../assets/logo.png" alt="logo"></img>
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
											<img className={classes.avatarImg} src="../assets/mother2.png" alt="game" loading="lazy"></img>
										</Avatar>
									}
									title="Dragon Slay"
									subheader="Delivered on: April 9, 2021"
								/>
								<CardMedia className={classes.media} image="../assets/dragonslay-frame.png" title="Dragon slay" />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										A very addictive game with increasing difficulty.Dragon slay is about a Mother Dragon trying to avoid Obstacles in her way to save her baby
										dragon who appears only after a minimum score of 5. (Use keyboard keys only)
									</Typography>
								</CardContent>

								<Typography variant="body2" color="secondary" component="p" className={classes.seeMore}>
									Technologies used:
								</Typography>

								<CardContent>
									<Typography variant="body2" color="textSecondary" paragraph>
										JavaScript, DOM manipulation, CSS3, HTML5 Canvas
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
				

					<Link href="https://www.linkedin.com/in/clever-tedeku-84505a127/?senderId=clever-tedeku-84505a127 " target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/linkedin.png" alt="linkedin" loading="lazy"></img>
					</Link>
					<Link href="https://github.com/Cleverttech" target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/github.jpg" alt="github" loading="lazy"></img>
					</Link>
					<Link href="mailto:clevertedeku@gmail.com" target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/gmail.png" alt="gmail" loading="lazy"></img>
					</Link>
					<Link href="https://www.instagram.com/clever_ttech/ " target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/instagram.png" alt="instagram" loading="lazy"></img>
					</Link>
					<Link href="https://twitter.com/TedekuClever" target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/twitter.png" alt="twitter" loading="lazy"></img>
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
	 )
}


export default App;
