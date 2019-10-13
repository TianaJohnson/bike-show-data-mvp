import React, { Component } from 'react';
import { connect } from 'react-redux';

class SumPage extends Component {

//this should show a summary of the file information per bike

    render() {
        return (
            <div>
            
            </div>
        )
    }
}

// on this page lets have a botton at the bottom
// to attach another bike to the file of this builder


const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(SumPage);