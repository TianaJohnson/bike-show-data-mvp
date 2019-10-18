import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';
import './FrameType.css';

class FrameType extends Component {

    constructor(props) {
        super(props);
        this.state = {
          road: '',
          cyclocross: '',
          gravel: '',
          moutain: '',
          city: '',
          track: '',
          tandem: '',
          touring: '',
          other: ''       }
      }

    frameMaterial = () => {
        this.props.history.push('/frame-material');
      }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
      }


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
                    Gravel
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
                    City
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Track
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Tandem
                </Button>
                <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: 10 }}>
                    Touring
                </Button>
                <FormControl>
                        <TextField
                            style={{ margin: 10 }}
                            name="other"
                            className="otherBikeType"
                            id="other"
                            label="other"
                            variant="outlined"
                            margin="normal"
                           // value={this.state.brand}
                            //onChange={this.handleChange}
                        />
                </FormControl>
                <Button 
                variant="contained"
                color="primary"
                size="large"
                onClick={this.frameMaterial}
                style={{ margin: 10 }}>
                    Frame Material
                </Button>
                
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(FrameType);