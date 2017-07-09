import React, {
  PropTypes,
  Component,
} from 'react';
import { Link, IndexLink } from 'react-router';
import './Footer.scss';


class Footer extends Component {
  render() {
    const { pathname } = this.props;
    return (
      <footer className="footer">
        <section className="links">
          {pathname !== 'home' && <IndexLink to="/">Home</IndexLink>}
          {pathname !== 'projects' && pathname.slice(0,9) !== '/projects' && <Link to="/projects">Projects</Link>}
          {pathname !== 'resume' && <Link to="/resume">Resume</Link>}
          {pathname !== 'blog' && pathname.slice(0,4) !== 'blog' && <Link to="/blog">Blog</Link>}
          {pathname !== 'contact' && <Link to="/contact">Contact</Link>}
        </section>
        <h5>© Zack Klinger 2017</h5>
      </footer>
    );
  }
}

Footer.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Footer;
