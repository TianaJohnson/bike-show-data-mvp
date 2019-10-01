import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './FrameMaterial.css';

class FrameMaterial extends Component {

    render() {
        return (
            <div>
                 <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Steel
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Stainless Steel
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Titanium
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Magnesium
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Wood
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Bamboo
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Carbon
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Aluminum
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Other
                </Button>
                <Button 
                variant="contained"
                color="primary"
                size="large"
                style={{ margin: 10 }}>
                    Next
                </Button>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(FrameMaterial);