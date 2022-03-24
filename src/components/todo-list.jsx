import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import store from "../store/store";
import { addTask } from "../store/todo-list";
class ToDoList extends React.Component {
  taskInput = createRef();

  render() {
    console.log("render");
    return (
      <>
        <div className="row" style={{ margin: "2%" }}>
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter task name"
              className="form-control"
              ref={this.taskInput}
            />
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn-danger"
              onClick={() => {
                // this.props.addTask();
                this.props.addTask({
                  id: this.props.tasks.length,
                  name: this.taskInput.current.value,
                  isCompleted: false,
                  user: 0,
                });
              }}
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="row" style={{ margin: "2%" }}>
          <div className="col-12">
            <ul>
              {this.props.tasks.map((task) => {
                return <li key={task.id}>{task.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  tasks: state.entities.toDoList.taskList,
});
const mapDispatchToProps = (dispatch) => ({
  addTask: (payload) => {
    dispatch(addTask(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
