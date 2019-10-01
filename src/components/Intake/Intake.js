import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';
import FrameType from './FrameType';

import './Intake.css';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
    },
}));

class Intake extends Component {

    buildBike = () => {
        this.props.history.push('/frame');
      }


    render() {
        return (
            <div className="intake-main">
            {/* <TestIntake/> */}
            <Card className="intake-card">    
                
                    <FormControl>
                    <TextField
                        style={{ margin: 10 }}
                        className="brand-input"
                        id="brand"
                        label="Brand"
                        variant="outlined"
                        margin="normal"
                        // value={this.state.phone_number}
                        // onChange={this.handleChangePhone}
                    />
                    </FormControl>
                    <FormControl>
                    <TextField
                        style={{ margin: 10 }}
                        className="builder-input"
                        id="builder"
                        label="Builder"
                        variant="outlined"
                        margin="normal"
                        // value={this.state.phone_number}
                        // onChange={this.handleChangePhone}
                    />
                    </FormControl>
                    <Button variant="contained"
                            color="secondary"
                            size="large"
                            style={{ margin: 10 }}
                            onClick={this.buildBike}>
                        Build
                    </Button>
                    </Card>
                </div>
            
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }

export default connect(mapStateToProps)(Intake);