import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f2eae1",
    },
    secondary: {
      main: '#ac7937',
    },
    action:{
     hover: "rgba(186,126,50,0.3)"
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



