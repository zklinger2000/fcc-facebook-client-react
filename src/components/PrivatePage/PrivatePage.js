import React, {
  Component,
  PropTypes,
} from 'react';

class PrivatePage extends Component {
  render() {
    return (
      <section className="private-page">
        <div className="container">
          <h1>Private Page</h1>
          <p className="jumbotron">This page is only visible to logged in users.<br/>
            It made a call to the REST API for a protected resource on loading.
            That data will populate the space below...
          </p>
        </div>
      </section>
    );
  }
}

PrivatePage.propTypes = {};
PrivatePage.defaultProps = {};

export default PrivatePage;
