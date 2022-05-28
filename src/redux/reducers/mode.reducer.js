import { TOGGLE_MODE } from "../actionType";

  
  export const toggleModeReducer = (
    state = {
      mode: localStorage.getItem("mode")?localStorage.getItem("mode"):"light"
    },
    action
  ) => {
    const { type } = action;
  
    switch (type) {
      case TOGGLE_MODE:
        return {
          mode: state.mode==="dark"?"light":"dark"
        };
      default:
        return state;
    }
  };
  