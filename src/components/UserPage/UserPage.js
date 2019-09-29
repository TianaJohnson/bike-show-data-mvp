import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@material-ui/core/Button';
import UserHeader from '../UserHeader/UserHeader';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`



class UserPage extends Component {


  newBuild = () => {
    this.props.history.push('/intake');
  }
  

  render() {
    return (
      <div>
        <h1 id="welcome">
          <UserHeader match={this.props.match} history={this.props.history} />
        </h1>

        <br />
        <Button variant="contained"
          color="secondary"
          size="large"
          onClick={this.newBuild}
          style={{ margin: 10 }}>
          New
                    </Button>
        <br />
        <LogOutButton className="log-in" />
      </div>
    );
  }
}


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxStore => {
  return { reduxStore: reduxStore };
}
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
