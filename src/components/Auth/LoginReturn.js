import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/auth.actions';

class LoginReturn extends Component {
  componentDidMount() {
    // console.log(this.props.location);
    // console.log(this.props.params);
    this.props.actions.fetchMe(this.props.location.query.token);
  }

  render() {
    return (
      <h1>Login Return</h1>
    );
  }
}

LoginReturn.propTypes = {
  location: PropTypes.object,
  params: PropTypes.object,
  actions: PropTypes.object.isRequired
};
LoginReturn.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginReturn);
