import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#252a2d",
    },
    secondary: {
      main: '#ac7937',
    },
    action:{
     hover: "rgba(172,121,55,0.3)"
   }
   
  },
  typography:{
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h6:{
      fontWeight: "200"
    }
  }
  
});

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
     <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



