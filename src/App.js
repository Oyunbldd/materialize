import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'

import ButtonsAndIcons from './pages/buttonsAndIcons';
import Color from './pages/color';
import Home from './pages/home';
import Typography from './pages/typography';
import AButton from './pages/abutton'
import Navbar from './pages/navbar'
import Collection from './pages/collection'
import Grid from './pages/grid'
import Cards from './pages/cards'
import Footer from './pages/footer'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/typography" exact>
          <Typography />
        </Route>
        <Route path="/color" exact>
          <Color />
        </Route>
        <Route path="/buttonsAndIcons" exact>
          <ButtonsAndIcons />
        </Route>

        <Route path="/Action-button" exact>
          <AButton/>
        </Route>
        <Route path="/Navbar" exact>
          <Navbar/>
        </Route>
        <Route path="/Collection" exact>
          <Collection/>
        </Route>
        <Route path="/Grid" exact>
          <Grid/>
        </Route>
        <Route path="/Cards" exact>
          <Cards/>
        </Route>
        <Route path="/Footer" exact>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
