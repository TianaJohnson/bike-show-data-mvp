import React, { Component } from 'react';
import { connect } from 'react-redux';

class BikeFile extends Component {

    //client_id: this.props.match.params.id,
    componentDidMount() {
    //this will eventually pull in the file, Word will need to be changed
       // this.props.dispatch({ type: 'FETCH_PROJECT', payload: { id: this.props.match.params.id } });
        
    }

    render() {
        return (
            <div></div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(BikeFile);