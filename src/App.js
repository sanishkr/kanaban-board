import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actionCreators } from "./store/actions";
import Header from "./components/Header";

import "./styles.css";
import Kanban from "./components/Kanban";

function App({ todosData, getTodo, ...props }) {
  useEffect(() => {
    getTodo();
  }, []);
  console.log({ todosData });
  const { todo, members } = todosData;
  return (
    <div className="App">
      <Header members={members} />
      <Kanban members={members} tasks={todo} addTodocb={props.addTodo} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  todosData: state.todoReducer.data
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getTodo: actionCreators.getTodo,
      addTodo: actionCreators.addTodo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
