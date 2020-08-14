export default (state, action) => {
  switch (action.type) {
    case "SHOW_FORM":
      return {
        ...state,
        visibility: true
      };
    case "HIDE_FORM":
      return {
        ...state,
        visibility: false
      };
    default:
      return state;
  }
};
