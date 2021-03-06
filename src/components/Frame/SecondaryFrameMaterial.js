import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/Textfield';
import './FrameMaterial.css';

class SecondaryFrameMaterial extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       : '',
    //       : ''
    //     }
    //   }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
      }

    render() {
        return (
            <div>
                <h1 className="title-mail">Secondary Frame Material</h1>
            <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               Welded
           </Button>
           <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               Brass Fillet
           </Button>
           <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               Lugged
           </Button>
           <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               Carbon Layup
           </Button>
           <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               Bonded
           </Button>
           <Button 
           variant="contained"
           color="secondary"
           size="large"
           style={{ margin: 10 }}>
               Silver Fillet
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
               Mechanical
           </Button>
           <FormControl>
                   <TextField
                       style={{ margin: 10 }}
                       name="other"
                       className="otherSecondaryBuildMaterial"
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
               Frame Joining
           </Button>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(SecondaryFrameMaterial);