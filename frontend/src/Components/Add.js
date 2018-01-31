import React from 'react';
import {FormGroup, ControlLabel, FormControl, Col, Button, Grid, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AddPost} from "../Containers/AddPost";
import {getDirect} from "../Containers/redirect";
import {Redirect} from 'react-router';


export const Add = () =>{
        return(
            <div>
                <Grid>
                    <Row>
                        <Link to="/"><Button className={"pull-right btn-info"}>Home</Button></Link>
                    </Row>
                    <form onSubmit={(event)=> AddPost(event)}>

                        <Col md={11}>
                            <FormGroup
                                controlId="formTitle"
                            >
                                <ControlLabel>Enter your text's title*</ControlLabel>
                                <FormControl
                                    name={"title"}
                                    type="text"
                                    placeholder="enter title"
                                />
                                <FormControl.Feedback />
                            </FormGroup>
                        </Col>
                        <Col md={11}>
                            <FormGroup
                                controlId="formBody"
                            >
                                <ControlLabel>Enter your text's body*</ControlLabel>
                                <FormControl componentClass="textarea" name={"body"} placeholder="enter your text's body" />
                            </FormGroup>
                           <Button type="submit" bsStyle={"success"}>Submit</Button>
                            <div className={"pull-right"}> <Link to={'/posts/'}><Button bsStyle={"info"}>Posts</Button></Link></div>
                        </Col>
                    </form>
                </Grid>
                {getDirect() && <Redirect to={"/posts/"}/>}
            </div>
        )
};
export default Add;