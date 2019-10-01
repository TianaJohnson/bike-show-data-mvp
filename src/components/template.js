import React, { Component } from 'react';

class Template extends Component {

    render() {
        return (
            <div></div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(Template);