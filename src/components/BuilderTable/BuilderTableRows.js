import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class BuilderTableRow extends Component {

    render() {
        return (
            
            <div>
                {console.log('ttttttt', this.props.builders)}
                <TableRow>
                <TableCell>{this.props.builders.builder_name}</TableCell>
                <TableCell>{this.props.builders.build_brand}</TableCell>
                <TableCell><Button variant="contained"
                        color="secondary"
                        size="large">file</Button></TableCell>
            </TableRow>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(BuilderTableRow);