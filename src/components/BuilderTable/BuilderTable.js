import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import BuildRow from './BuilderTableRows';
import { connect } from 'react-redux';
import UserHeader from '../UserHeader/UserHeader';
import './BuilderTable.css';

class BuilderTable extends Component {

    componentDidMount() {
       // this.props.dispatch({ type: 'FETCH_BUILDER', payload: { id: this.props.match.params.id } });   
    //    // const id = this.props.match.params.id;
        this.props.dispatch({ type: 'FETCH_BUILDER'}); 
        // console.log(this.props.builder);
    //     // const action = this.props.dispatch({ type: 'FETCH_FILE', payload: id});
    //     // this.props.dispatch(action);
        
    }

    newBuild = () => {
        this.props.history.push('/intake');
      }
 

    render() {
        return (
            <div>
                <h1 id="welcome">
          <UserHeader match={this.props.match} history={this.props.history} />
        </h1>

        <br />
        <Button variant="contained"
          color="secondary"
          size="large"
          onClick={this.newBuild}
          style={{ margin: 10 }}>
          New
                    </Button>
                <Card className="builder_table" >
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
                                {this.props.builder.map(builders =>
           <BuildRow key={builders.id} history={this.props.history} builders={builders}/>
         )}
                                {/* {this.props.builder.map((builders, i) => {
                                    return (<BuildRow key={i}   
                                        builders={builders} history={this.props.history}/>);
                                })} */}
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