import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class BuilderTableRow extends Component {

    render() {
        return (
            <div>
                <TableRow>
                <TableCell>{this.props.builders.builder_name}</TableCell>
                <TableCell>{this.props.builders.brand}</TableCell>
                <TableCell> <Button variant="contained"
                    size="small"
                    //onClick={this.editCust}
                    color="primary"
                    style={{ margin: 10 }}>
                    Edit
                </Button></TableCell>
                <TableCell><Button variant="contained"
                        color="secondary"
                        //onClick={this.custFile}
                        style={{ margin: 10 }}>
                        Customer File
                </Button></TableCell>
                <TableCell> 
                    <Button variant="contained"
                        color="inherit"
                        //onClick={this.archiveCust}
                        style={{ margin: 10 }}>
                        Delete
                    </Button>
                </TableCell>

            </TableRow>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(BuilderTableRow);