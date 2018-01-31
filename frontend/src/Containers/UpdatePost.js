import {store} from "../index";
import {updatePost} from "../Actions/index";
import {updateDB} from "../Actions";

export const UpdatePost = (index, id) =>{
    let curr = store.getState()[index];
    const txtTitle = prompt("New title", curr.title)||curr.title;
    const txtBody = prompt("New body", curr.body)||curr.body;
    store.dispatch(updateDB(id,txtTitle,txtBody));
    store.dispatch(updatePost(index,txtTitle,txtBody));
};