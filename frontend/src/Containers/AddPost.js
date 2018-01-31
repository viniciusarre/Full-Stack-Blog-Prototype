import {addPost} from "../Actions/index";
import {store} from "../index";
import {redirect} from "./redirect";
import {insertPost} from "../Actions/index";

export const AddPost = (event) => {
    event.preventDefault();
    if (event.target.title.value !== '' && event.target.body.value !== ''){
        const t = event.target.title.value;
        const b = event.target.body.value;
        store.dispatch(insertPost(t,b));
        store.dispatch(addPost(event.target.title.value, event.target.body.value));
        event.target.title.value = event.target.body.value = "";
        alert("successfully added!");
        redirect(true);

    }else
        alert("No empty fields!!");
};