import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
// import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';
import Button from '@material-ui/core/Button';
import './Intake.css';

// const useStyles = makeStyles(theme => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     formControl: {
//         margin: theme.spacing(1),
//     },
// }));

class Intake extends Component {

    constructor(props) {
        super(props);
        this.state = {
            builder_name: '',
            build_brand: ''
        }
    }

    // should pull priject file up
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_FILE', payload: { id: this.props.match.params.id } });    
    }

    //Send to saga to create a builder in the data base
    buildBike = (event) => {
        console.log('add builder info');
        const action = {
            type: 'ADD_BUILDER',
            payload: this.state,
        };
        this.props.dispatch(action);
        this.setState({
            builder_name: '',
            build_brand: ''
        })
        this.props.history.push(`/file/${this.props.builder.id}`);
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    render() {
        // const builder = this.props.reduxStore.builder.builderIntakeReducer;
        return (
            <div className="intake-main">
                {/* <TestIntake/> */}
                <Card className="intake-card">

                    <FormControl>
                        <TextField
                            style={{ margin: 10 }}
                            className="builderInput"
                            id="builder_name"
                            label="Builders Name"
                            name="builder_name"
                            variant="outlined"
                            margin="normal"
                            value={this.state.builder_name}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl>
                    <TextField
                            style={{ margin: 10 }}
                            className="builderInput"
                            id="build_brand"
                            label="Brand"
                            name="build_brand"
                            variant="outlined"
                            margin="normal"
                            value={this.state.build_brand}
                            onChange={this.handleChange}
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