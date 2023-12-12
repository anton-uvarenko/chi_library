import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
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

export const taskThunk = createAsyncThunk(
    'task/taskThunk',
    async () => {
        const response = await Promise.resolve(
            [
                {
                    id: Math.random(),
                    description: Math.random().toString(),
                },
                {
                    id: Math.random(),
                    description: Math.random().toString(),
                },
                {
                    id: Math.random(),
                    description: Math.random().toString(),
                },
            ] as ITask[]
        )

        return response
    })

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.messages.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(taskThunk.fulfilled, (state, action: PayloadAction<ITask[]>) => {
            state.messages = action.payload;
        })
        builder.addCase(taskThunk.rejected, (state, action) => {
          console.log("rejected");
        })
        builder.addCase(taskThunk.pending, (state, action) => {
          console.log("pending")
        })
    }
})

export const tasksSelector= (state: RootState) => state.task.messages;
export const {addTask} = messageSlice.actions;

export default messageSlice.reducer;