import React, {
  PropTypes,
} from 'react';
import { IndexLink } from 'react-router';
import './Header.scss';

const Header = (props) => {
  return (
    <nav>
      <ul>
        <li className={props.pathname === 'home' ? 'active' : null}>
          <IndexLink to="/">Home</IndexLink>
        </li>
        <li>
          <a href={`${process.env.NODE_ENV === 'production' ? 'https://fcc-heroku-rest-api.herokuapp.com' : 'http://localhost:8050'}/login/facebook`} target="_self"><i className="fa fa-facebook fa-2x"/>Login</a>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Header;
