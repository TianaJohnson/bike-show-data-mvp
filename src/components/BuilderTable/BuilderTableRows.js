import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class BuilderTableRow extends Component {



    buildFile = () => {
        this.props.history.push(`file/${this.props.builders.id}`);
    }

    render() {
        return (
            
                <TableRow>
                    
                <TableCell>{this.props.builders.builder_name}</TableCell>
                <TableCell>{this.props.builders.build_brand}</TableCell>
                <TableCell><Button variant="contained"
                        color="secondary"
                        size="large"
                        onClick={this.buildFile}>
                            file
                            </Button>
                </TableCell>
            </TableRow>
            
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(BuilderTableRow);