import React from 'react';
import '../App.css';
import {Button, Grid, Col, Row, Panel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../libs/bootstrap-3.3.7-dist 2/css/bootstrap.css';

const App=()=>{
    return (
        <Panel>
            <Grid>
                <Row>
                       <Col md={12}> <h1 className={"text-center"}>Welcome to your blog!</h1></Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2>Getting Started</h2>
                        <p>The web is an awesome place where everyone is able to express their opinions and beliefs... write a post</p>
                        <Link to="/posts/add/"> <Button bsStyle="info" bsSize="large">Add Posts</Button></Link>
                    </Col>
                    <Col md={6}>
                        <h2>Reading posts</h2>
                        <p>If you would like to read some posts, please, get started by clicking the button below! I hope you'll enjoy it!</p>
                        <Link to="/posts/"><Button bsStyle="info" bsSize="large">View Posts List</Button></Link>
                    </Col>
                </Row>
            </Grid>
        </Panel>
    );
};

export default App;
