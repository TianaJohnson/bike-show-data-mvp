import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';


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
    componentDidMount() {
    }

    buildBike = () => {
        this.props.history.push('/frame');
    }

    //Send to saga to create a builder in the data base
    addCustomer = (event) => {
        console.log('add builder info');
        const action = {
            type: 'ADD_BUILDER',
            payload: this.props.reduxStore.builder.builderIntakeReducer,
        };
        this.props.dispatch(action);
        this.setState({
            builder_name: '',
            brand: ''
        })
        // this.props.history.push(`/project/:id`);
    }
    // i need to build out the build "file" reducer/saga for this

    //potential handle change if it works properly
    handleChange = (key) => (event) => {
        const action = {
            type: 'SET_BUILDER',
            payload: { key: key, value: event.target.value },
        };
        console.log('sending to build saga')
        this.props.dispatch(action);
    }


    render() {
        const builder = this.props.reduxStore.builder.builderIntakeReducer;
        return (
            <div className="intake-main">
                {/* <TestIntake/> */}
                <Card className="intake-card">

                    <FormControl>
                        <TextField
                            style={{ margin: 10 }}
                            className="builderInput"
                            id="builder_name"
                            label="builder"
                            //placeholder=" "
                            variant="outlined"
                            margin="normal"
                            value={builder.builder_name}
                            onChange={this.handleChange('builder_name')}
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            style={{ margin: 10 }}
                            className="brandInput"
                            id="brand"
                            label="brand"
                            variant="outlined"
                            margin="normal"
                            value={builder.brand}
                            onChange={this.handleChange('brand')}
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