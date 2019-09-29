import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';
// import TestIntake from './testIntake';

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


    render() {
        return (
            <div className="intake-main">
            {/* <TestIntake/> */}
            <Card className="intake-card">
                
                
                
                    <FormControl>
                   
                    <TextField
                        style={{ margin: 10 }}
                        className="other"
                        id="outline-other"
                        label="other"
                        variant="outlined"
                        margin="normal"
                        // value={this.state.phone_number}
                        // onChange={this.handleChangePhone}
                    />
                    </FormControl>
                    </Card>
                </div>
            
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }

export default connect(mapStateToProps)(Intake);