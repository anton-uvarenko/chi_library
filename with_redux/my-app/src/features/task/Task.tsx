import React, {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addTask, ITask, tasksSelector, taskThunk} from "./taskSlice";

export const Task: FC = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(tasksSelector);

    const handleClick = () => {
        dispatch(addTask({
            description: Math.random().toString(),
            id: tasks.length,
        } as ITask))
    }

    useEffect(() => {
        dispatch(taskThunk());
    }, []);

    return (
        <>
            <button onClick={handleClick}>add task</button>
            {tasks.map(t => {
                return (
                    <>
                        <div>
                            {t.id}
                        </div>
                        <div>
                            {t.description}
                        </div>
                    </>
                )
            })}
        </>
    )
}