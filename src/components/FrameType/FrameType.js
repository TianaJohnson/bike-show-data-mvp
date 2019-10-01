import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FrameType.css';

class FrameType extends Component {

    render() {
        return (
            <div></div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(FrameType);