import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
//import { About } from './styles';
//Animations
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
