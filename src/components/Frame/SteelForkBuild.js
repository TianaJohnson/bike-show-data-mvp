import React, { Component } from 'react';
import { connect } from 'react-redux';

class SteelForkBuild extends Component {

    render() {
        return (
            <div>
                <h1 className="title-mail">Fork Build</h1>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(SteelForkBuild);