// import { getTodos } from "./api";

const actions = {
  TODO: "TODO",
  ADD_TODO: "ADD_TODO",
  MEMBERS: "MEMBERS"
};

const actionCreators = {
  getTodo: () => ({
    type: actions.TODO
    // payload: getTodos()
  }),
  addTodo: (props) => ({
    type: actions.ADD_TODO,
    payload: props
  }),
  getMembers: () => ({
    type: actions.MEMBERS
    // payload
  })
};

export { actions, actionCreators };
