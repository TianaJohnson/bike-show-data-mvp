import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class BuilderTable extends Component {

    render() {
        return (
            <div>
                <Card>
                    <Paper>
                        <Table className="admin_table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Builder</TableCell>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>View/Edit</TableCell>
                                </TableRow>
                            </TableHead>
                            {/* <TableBody>
                                {this.props.reduxStore.builder.builderIntakeReducer.map(builder =>
                                    <BuilderTableRow key={builder.id} history={this.props.history} builder={builder} />
                                )}
                            </TableBody> */}
                        </Table>
                    </Paper>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
}

export default connect(mapStateToProps)(BuilderTable);