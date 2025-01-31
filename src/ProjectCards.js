import React from 'react';
import { Grid, Card, CardHeader, Avatar, CardMedia, CardContent, Typography, Button, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ac7937',
    },
    secondary: {
      main: '#ac7937',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600, 
      md: 800,
      lg: 1280,
      xl: 1600,
    },
  },
 // spacing: 8,
});

const useStyles = (theme) => ({
  projectCards: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 400,
    margin: 'auto',
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  avatarImg: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  media: {
    height: 233, 
    width: "auto", 
    objectFit: "contain", 
    margin: theme.spacing(2),
  },
  seeMore: {
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(1),
  },

  projectStyles: {
    margin: "0px 20px",
    display:"flex",
    flexFlow: "wrap"
  },
  cardStyles: {
     maxWidth: 345,
    boxShadow: 20
  }

})
const ProjectCards = () => {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={classes.projectStyles}>

          <Card sx={classes.cardStyles}>
              <CardHeader
                avatar={
                  <Avatar
                    alt="topoli_arts"
                    aria-label="topoli"
                    src="../../assets/topoli-logo.png"
                    loading="lazy"
                    sx={classes.avatarImg}
                  />

                }
                title="Topoli Arts"
                subheader="Delivered on: May 21, 2021"
              />
              <CardMedia sx={classes.media} image="../../assets/topoli-frame.png" title="topoli arts" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a web application with some content management features where professional artists as mentors get to offer mentorships courses,
                  interact with students and also where students get to interact with each other.
                </Typography>
              </CardContent>

              <Typography variant="body2" component="p" sx={classes.seeMore}>
                Technologies used:
              </Typography>

              <CardContent>
                <Typography variant="body2" color="textSecondary" paragraph>
                  ReactJS, Google Material UI, NodeJS, ExpressJS, Socket.io, CSS, HTML
                </Typography>
                <Link href="https://github.com/Cleverttech/topoliArtsClient">
                  <Button variant="contained" target="_blank">
                    Checkout TopoliArts here
                  </Button>
                </Link>
              </CardContent>
            </Card>
   
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={classes.projectStyles}>

          <Card sx={classes.cardStyles}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="clever_move"
                    src="../../assets/logo.png" alt="clever_move"
                    loading="lazy"
                    sx={classes.avatarImg}
                  />
                }
                title="Clever Move"
                subheader="Delivered on: April 30, 2021"
              />
              <CardMedia sx={classes.media} image="../../assets/clevermove-frame.png" title="Clever move" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a web application of a Moving company with the functionalities of customers to be able to book their moving schedules for the admin
                  user to have an overview of all booked schedules and be able to accept or decline.
                </Typography>
              </CardContent>

              <Typography variant="body2" component="p" sx={classes.seeMore}>
                Technologies used:
              </Typography>

              <CardContent>
                <Typography variant="body2" paragraph>
                  Handlebars, Bootstrap, NodeJS, ExpressJS, CSS, HTML
                </Typography>
                <Link href="" target="_blank">
                  <Button variant="contained">
                    Checkout Clever-Move here
                  </Button>
                </Link>
              </CardContent>
            </Card>
    
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={classes.projectStyles}>
        
          <Card sx={classes.cardStyles}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="game"
                    src="../assets/mother2.png" alt="game" loading="lazy"
                    sx={classes.avatarImg}
                  />
                }
                title="Dragon Slay"
                subheader="Delivered on: April 9, 2021"
              />
              <CardMedia sx={classes.media} image="../assets/dragonslay-frame.png" title="Dragon slay" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  A very addictive game with increasing difficulty. Dragon slay is about a Mother Dragon trying to avoid Obstacles in her way to save her baby
                  dragon who appears only after a minimum score of 5. (Use keyboard keys only)
                </Typography>
              </CardContent>

              <Typography variant="body2" component="p" sx={classes.seeMore}>
                Technologies used:
              </Typography>

              <CardContent>
                <Typography variant="body2" paragraph>
                  JavaScript, DOM manipulation, CSS3, HTML5 Canvas
                </Typography>
                <Link href="https://cleverttech.github.io/Dragon-slay/" target="_blank">
                  <Button variant="contained" >
                    Checkout Dragon-Slay here
                  </Button>
                </Link>
              </CardContent>
            </Card>
     
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ProjectCards;
