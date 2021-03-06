import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
// import FrameType from '../Frame/FrameType';
// import Wheels from '../WTAfile/Wheels';


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

class CustomerToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_BUILDER', payload: { id: this.props.match.params.id } }); 
        this.props.dispatch({ type: 'FETCH_FILE', payload: { id: this.props.match.params.id } });
        // this.props.dispatch({ type: 'FETCH_BUILDER', payload: { id: this.props.match.params.id } });
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const project = this.props.reduxStore.file.bikeFileReducer;
        const builder = this.props.reduxStore.builder.builderIntakeReducer;
// tool bar (tabs) to navigate through customer file
        return (
            <div>
            <Paper square>
              

                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        centered
                    >
                        <Tab label="Frame" />
                        <Tab label="Wheels/Tires/Axles" />
                        <Tab label="Brakes & Drivetrain" />
                        {/* <Tab label="" /> */}
                        {/* <Tab label="Contact Information" /> */}
                    </Tabs>
                </AppBar>
                {/* {value === 0 && <FrameType match={this.props.match} history={this.props.history}/>} 
                {value === 1 && <Wheels match={this.props.match} history={this.props.history}/>}  */}

                {/* {value === 2 && <BuildStatusPage match={this.props.match} history={this.props.history}/>} */}
                {/* {value === 2 && <CustomerNotesPage match={this.props.match} history={this.props.history}/>}
                {value === 4 && <CustomerContactInfo match={this.props.match} history={this.props.history}/>} */}
            </Paper>
            
         <h2>Name:{project.builder_id}</h2>
          {JSON.stringify(project)}
          {JSON.stringify(builder)}
         </div>
        )
    }

}
// CustomerToolBar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}
export default connect(mapStateToProps)(CustomerToolBar);