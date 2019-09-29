import React from 'react';
import { connect } from 'react-redux';
import './UserHeader.css';

const userHeader = (props) => (
    <div className="user_header">
        <p>Welcome, {props.user.username}!</p>
    </div>

);
const mapStateToProps = state => ({
    user: state.user,
  });
export default connect(mapStateToProps)(userHeader);