// import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Home extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    // APi call to load profiles
    this.props.actions.getUserList().then(() => {
      console.log(this.props.users);
      this.setState({ users: this.props.users });
    });
  }

  render() {
    return (
      <div className="page-cont">
        <div className="user-list-cont">
          <div className="list-header">Select an account</div>
          <div className="list-body">
            {this.state.users.map((user, idx) => (
              <Link
                className="list-item"
                key={idx}
                to={'/user/' + user.id + '/profile'}
              >
                <div className="item-img">
                  <img src={user.profilepicture} alt="user profile" />
                </div>
                <div>{user.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
