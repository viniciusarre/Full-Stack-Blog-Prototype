import React from 'react';
import {Col,Row} from 'react-bootstrap';
import {store} from "../index";
import {Button} from 'react-bootstrap';
import {Delete} from "./DeletePost";
import {UpdatePost} from "./UpdatePost";
import {Component} from 'react'
import {FetchPost} from "./FetchPost";


export default class Map extends Component {
    componentWillMount(){
        FetchPost()
    }
    render() {
        let data = store.getState();
        if (data.length > 0) {
            return data.map((elem, ind) =>
                <Row key={ind}>
                    <Col key={ind} md={12}
                         style={{boxShadow: '10px 10px 5px #888888', marginTop: 20, userSelect: 'none'}}>
                        <blockquote style={{wordWrap: 'break-word'}}>
                            <h1>#{ind} {elem.title}</h1>
                            <p>{elem.body}</p>
                        </blockquote>
                        <Col md={6}>
                            <div style={{marginBottom: 10}}>
                                <Button bsStyle="warning" onClick={() => UpdatePost(ind, elem.id)}>
                                    <span className="glyphicon glyphicon-pencil"></span>
                                </Button>
                                <Button bsStyle="danger" style={{marginLeft: 10}} onClick={() => Delete(ind, elem.id)}>
                                    <span className="glyphicon glyphicon-remove"></span>
                                </Button>
                            </div>
                        </Col>
                    </Col>
                </Row>
            );
        } else {
            return (<blockquote><h1>THERE ARE NO POSTS HERE YET... ADD ONE TO GET STARTED!</h1></blockquote>)
        }

    }
}
