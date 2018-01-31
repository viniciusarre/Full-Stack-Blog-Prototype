import {store} from "../index";
import {fetchPost} from "../Actions/index";

export const FetchPost = () =>{
    store.dispatch(fetchPost());
};