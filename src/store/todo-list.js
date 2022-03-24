import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
const slice = createSlice({
  name: "toDoList",
  initialState: {
    taskList: [],
    lastFetch: null,
  },
  reducers: {
    addTask: (toDoList, action) => {
      toDoList.taskList.push(action.payload);
    },
  },
});
export default slice.reducer;
export const { addTask } = slice.actions;

export const getTaskList = createSelector(
  (state) => state.entities.toDoList,
  (toDoList) => toDoList.taskList
);
