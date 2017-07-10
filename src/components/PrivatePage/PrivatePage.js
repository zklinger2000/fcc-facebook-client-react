import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/auth.actions';
import './PrivatePage.scss';

class PrivatePage extends Component {
  componentDidMount() {
    console.info('CDM: PrivatePage');
    const { authenticated } = this.props;
    const { getPrivateResource } = this.props.actions;

    if (authenticated) getPrivateResource();
  }

  render() {
    return (
      <section className="private-page">
        <div className="container">
          <h1>Private Page</h1>
          <p className="jumbotron">This page is only visible to logged in users.<br/>
            It made a call to the REST API for a protected resource on loading.
            If you open up your browser's console, you should see:<br/>
            <code>{`{message: "Secret Code is 789"}`}</code>
          </p>
        </div>
      </section>
    );
  }
}

PrivatePage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};
PrivatePage.defaultProps = {
  authenticated: false
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivatePage);
