import {store} from "../index";
import {updatePost} from "../Actions/index";

export const UpdatePost = (id) =>{
    let curr = store.getState()[id];
    const txtTitle = prompt("New title", curr.title)||curr.title;
    const txtBody = prompt("New body", curr.body)||curr.body;
    store.dispatch(updatePost(id,txtTitle,txtBody));
};