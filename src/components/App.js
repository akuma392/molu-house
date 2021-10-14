import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import PageNotFound from './404Page';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Services from './Services';

function App(props) {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
