import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import internal from "node:stream";


export interface ITask {
    description: string,
    id: number,
}

export interface ITaskState {
    messages: ITask[],
}

const initialState: ITaskState = {
    messages: [],
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.messages.push(action.payload);
        }
    }
})

export const tasksSelector= (state: RootState) => state.task.messages;
export const {addTask} = messageSlice.actions;

export default messageSlice.reducer;