import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
import BuildRow from './BuilderTableRows';
import { connect } from 'react-redux';

class BuilderTable extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_BUILDER'}); 
        console.log(this.props.builder)
        
    }

    render() {
        return (
            <div>
                <Card calssName="builder_table" >
                    <Paper>
                        <Table className="admin_table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Builder</TableCell>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>View/Edit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* this is still a problem */}
                                {this.props.builder.map((builders, i) => {
                                    return (<BuildRow key={i}   
                                        builders={builders} history={this.props.history}/>);
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    ...reduxStore,
    builder: reduxStore.builder.builderIntakeReducer,
});

export default connect(mapStateToProps)(BuilderTable);