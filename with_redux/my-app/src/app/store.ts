import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import taskReducer from '../features/task/taskSlice';
import {loggerMiddleware} from "../middlewares/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
          .concat(loggerMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
