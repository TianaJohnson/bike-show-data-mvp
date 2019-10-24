import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';


class FrameType extends Component {

    constructor(props) {
        super(props);
        this.state = {
        frameType: '',
        }
      }

    frameMaterial = () => {
    this.props.history.push('/frame-material');
    }

    bikeInput = (evt) => {
        console.log('bike input');
        this.setState({
            frameType: evt.target.value
        });
    };

    render() {
        return (
            <div>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                value='road'
                onClick={this.bikeInput}
                style={{ margin: 10 }}>
                    Road
                </Button>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                value='cyclocross'
                onClick={this.bikeInput}
                style={{ margin: 10 }}>
                    Cyclocross
                </Button>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                value="gravel"
                onClick={this.bikeInput}
                style={{ margin: 10 }}>
                    Gravel
                </Button>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                value="mountain"
                onClick={this.bikeInput}
                style={{ margin: 10 }}>
                    Moutain
                </Button>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                value="city"
                onClick={this.bikeInput}
                style={{ margin: 10 }}>
                    City
                </Button>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                value="track"
                onClick={this.bikeInput}
                style={{ margin: 10 }}>
                    Track
                </Button>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                value="tandem"
                onClick={this.bikeInput}
                style={{ margin: 10 }}>
                    Tandem
                </Button>
                <Button
                variant="contained"
                color="secondary"
                size="large"
                value="touring"
                onClick={this.bikeInput}
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
                onChange={this.bikeInput}
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