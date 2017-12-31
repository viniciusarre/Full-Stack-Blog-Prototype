import {addPost} from "../Actions/index";
import {store} from "../index";
import {redirect} from "./redirect";


export const AddPost = (event) => {
    event.preventDefault();
    if (event.target.title.value !== '' && event.target.body.value !== ''){
        store.dispatch(addPost(event.target.title.value, event.target.body.value));
        event.target.title.value = event.target.body.value = "";
        alert("successfully added!");
        redirect(true);
}else
        alert("No empty fields!!");
};