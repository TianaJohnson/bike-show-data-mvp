import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';

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
            <Card className="intake-card">
                <div className="intake-main">
                    <FormControl>
                    <TextField
                        style={{ margin: 10 }}
                        className="new-cust-intake"
                        id="outline-phonenumber"
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                        // value={this.state.phone_number}
                        // onChange={this.handleChangePhone}
                    />
                    </FormControl>
                </div>
            </Card>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
  }

export default connect(mapStateToProps)(Intake);