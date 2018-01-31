import {store} from "../index";
import {deletePost} from "../Actions/index";
import {deleteOne} from "../Actions";

export const Delete = (index, id) =>{
    store.dispatch(deleteOne(id));
    store.dispatch(deletePost(index));
};