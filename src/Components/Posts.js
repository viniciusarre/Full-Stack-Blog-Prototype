import React from 'react';
import {Button, Grid, Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Map from '../Containers/Map';
import {redirect} from "../Containers/redirect";


const Posts = () =>{
    redirect(false);
    return(
        <Grid>
            <div>
                <Row>
                    <Link to="/"><Button className={"pull-right btn-info"}>Home</Button></Link>
                </Row>
                <Row>
                    <div className="countainerBox">
                        <Col md={12}>
                            <Map/>
                        </Col>
                    </div>
                </Row>
                <Row style={{marginTop:'10%'}}>
                    <Link to="/posts/add">
                        <Button className={"btn btn-success"}>Add Post</Button>
                    </Link>
                </Row>
            </div>

        </Grid>
    );
};
export default Posts;
