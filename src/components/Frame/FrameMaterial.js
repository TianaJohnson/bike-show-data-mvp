import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';
// import Secondary from './SecondaryFrameMaterial';
import './FrameMaterial.css';

class FrameMaterial extends Component {

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
      }

    render() {
        return (
            <div>
                <h1 className="title-mail">Primary Frame Material</h1>
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
                <FormControl>
                        <TextField
                            style={{ margin: 10 }}
                            name="other"
                            className="otherPrimeBuildMaterial"
                            id="other"
                            label="other"
                            variant="outlined"
                            margin="normal"
                            // value={this.state.other}
                            // onChange={this.handleChange}
                        />
                </FormControl>
                <FormControl>
                        <TextField
                            style={{ margin: 10 }}
                            name="other"
                            className="otherPrimeBuildMaterial"
                            id="outline-notes"
                            label="notes"
                            variant="outlined"
                            margin="normal"
                            fullWidth 
                            multiline rows="8"
                                                     
                            // value={this.state.other}
                            // onChange={this.handleChange}
                        />
                </FormControl>
                <br/>
                <Button 
                variant="contained"
                color="primary"
                size="large"
                style={{ margin: 10 }}>
                    Secondary Frame Material
                </Button>
                
                <Button 
                variant="contained"
                color="primary"
                size="large"
                style={{ margin: 10 }}>
                    Frame Joining 
                </Button>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(FrameMaterial);