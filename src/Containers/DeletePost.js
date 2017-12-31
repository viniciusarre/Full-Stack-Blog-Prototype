import {store} from "../index";
import {deletePost} from "../Actions/index";

export const Delete = (index) =>{
  store.dispatch(deletePost(index));
};