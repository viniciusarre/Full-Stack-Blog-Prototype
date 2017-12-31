import {defaultState} from "../State/defaultState";
import {ADD, DELETE, UPDATE} from "../Actions/const";

export default(prevState = defaultState, action) => {
  switch (action.type){
      case ADD:
          return [
              ...prevState,
              action
          ];
      case DELETE:
          return  [
              ...prevState.slice(0,action.id),
              ...prevState.slice(action.id+1)
          ];
      case UPDATE:
          return [
              ...prevState.slice(0,action.id),
              action,
              ...prevState.slice(action.id+1)
          ];
      default:
        return prevState;
  }
}

