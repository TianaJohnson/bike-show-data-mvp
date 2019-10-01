import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './FrameType.css';

class FrameType extends Component {

    render() {
        return (
            <div>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Road
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Cyclocross
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Moutain
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Touring
                </Button>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(FrameType);