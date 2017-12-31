import {ADD, DELETE, UPDATE} from "./const";

let id=2;
export const addPost =(txtTitle,txtBody) => ({
    type: ADD,
    id:id++,
    title:txtTitle,
    body:txtBody

}
);

export const deletePost = (id) => ({
   type: DELETE,
   id:id
});

export const updatePost = (id, title, body) => ({
    type:UPDATE,
    id,
    title,
    body
});