import {ADD, DELETE, FEEDBACK, FETCH, RECEIVE, REQUEST, UPDATE} from "./const";
import axios from 'axios';

const fetch = 'http://localhost:8000/fetch/';
const insert = 'http://localhost:8000/insert/';
const update = 'http://localhost:8000/update/';
const del = 'http://localhost:8000/delete/';

export const addPost =(id,txtTitle,txtBody) => ({
    type: ADD,
    id,
    title:txtTitle,
    body:txtBody

}
);

export const deletePost = (id) => ({
   type: DELETE,
   id:id
});

export const updatePost = (id,title, body) => ({
    type:UPDATE,
    id,
    title,
    body
});

const request = () => ({
    type:REQUEST
});


const receivePosts = (data)=>({
    type: RECEIVE,
    payload:data
});



export const fetchPost = () =>dispatch => {
    dispatch(request());
    return axios(fetch)
        .then(json=>dispatch(receivePosts(json.data.data)))
};

export const insertPost = (title, body)=>dispatch=>{
    dispatch(request());
    const i = insert+"?"+"title="+title+"&body="+body;
    return axios(i).then(json=>(json.data))
};

export const updateDB = (id, title,body)=>dispatch=>{
    dispatch(request());
    const i = update+"?"+"title="+title+"&body="+body+"&id="+id;
    return axios(i).then(json=>(json.data))
};
export const deleteOne = (id)=>dispatch=>{
    dispatch(request());
    const i = del+"?"+"id="+id;
    return axios(i).then(json=>(json.data))
};


// const receiveFeedback = (data) =>({
//     type: FEEDBACK,
//     payload:data
// });