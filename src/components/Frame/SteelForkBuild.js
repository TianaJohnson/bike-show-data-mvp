import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';
import './FrameMaterial.css';

class SteelForkBuild extends Component {

    render() {
        return (
            <div>
                <h1 className="title-mail">Fork Build</h1>

                <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               Unicrown
           </Button>
           <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               Segmented
           </Button>
           <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               lugged
           </Button>
           <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               bilam
           </Button>
           
           <FormControl>
                   <TextField
                       style={{ margin: 10 }}
                       name="other"
                       className="otherSteelForkBuild"
                       id="other"
                       label="other"
                       variant="outlined"
                       margin="normal"
                       // value={this.state.other}
                       // onChange={this.handleChange}
                   />
           </FormControl>

           <Button 
           variant="contained"
           color="primary"
           size="large"
           style={{ margin: 10 }}>
               Wheels and such
           </Button>

            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(SteelForkBuild);