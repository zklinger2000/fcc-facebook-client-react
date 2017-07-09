import React, {
  Component,
} from 'react';
import Helmet from 'react-helmet';
import './HomePage.scss';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

class HomePage extends Component {
  render() {
    return (
      <section className="home-page">
        <ScrollToTopOnMount/>
        <Helmet
          title="FCC Facebook Client React"
          titleTemplate="%s | A Full Stack React application with Facebook Login"
        />
        <header>
          <h1>FCC Facebook Client React</h1>
          <p>A Full Stack React application with Facebook Login</p>
        </header>
     </section>
    );
  }
}

export default HomePage;
