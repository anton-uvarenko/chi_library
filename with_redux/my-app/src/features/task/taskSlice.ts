import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import internal from "node:stream";

export enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE",
}

export interface ITask {
    description: string,
    id: number,
    status: TaskStatus,
}

export interface ITaskState {
    tasks: ITask[],
}

const initialState: ITaskState = {
    tasks: [],
}

export const randomStatus= (): TaskStatus => {
    const rd = Math.floor(Math.random() * 3);

    console.log(rd);

    switch (rd) {
        case 0:
            return TaskStatus.TODO;
        case 1:
            return TaskStatus.IN_PROGRESS;
        case 2:
            return TaskStatus.DONE;
    }

    return TaskStatus.TODO;
}

const taskResponse = async () => {
    return [
        {
            id: 0,
            description: Math.random().toString(),
            status: randomStatus(),
        },
        {
            id: 1,
            description: Math.random().toString(),
            status: randomStatus(),
        },
        {
            id: 2,
            description: Math.random().toString(),
            status: randomStatus(),
        },
    ] as ITask[]
}

export const taskThunk = createAsyncThunk(
    'task/taskThunk',
    async () => {
        return taskResponse();
    })

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks.splice(
                state.tasks.findIndex((element, index, array) => {
                    return element.id === action.payload;
                }),
                1
            )
        }
    },
    extraReducers: (builder) => {
        builder.addCase(taskThunk.fulfilled, (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        })
        builder.addCase(taskThunk.rejected, (state, action) => {
          console.log("rejected");
        })
        builder.addCase(taskThunk.pending, (state, action) => {
          console.log("pending")
        })
    }
})

export const tasksSelector= (state: RootState) => state.task.tasks;
export const {addTask, deleteTask} = messageSlice.actions;

export default messageSlice.reducer;