import './App.css';
import Navbar from "./components/Navbar";
import { Grid } from "@material-ui/core";

function App() {


  const heroSection = {
    backgroundColor: "blue"
  }
  return (
    <div className="App">
   <Navbar/>
    <Grid style={heroSection}>

    </Grid>
    </div>
  );
}

export default App;
