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
import Input from './pages/input'
import Fancy from './pages/fancy'
import Chips from './pages/chips'
import Carousel from './carousel'
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
        <Route path="/Input" exact>
          <Input/>
        </Route>
        <Route path="/Fancy" exact>
          <Fancy/>
        </Route>
        <Route path="/Chips" exact>
          <Chips/>
        </Route>
        <Route path="/Carousel" exact>
          <Carousel/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
