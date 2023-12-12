import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addTask, ITask, tasksSelector} from "./taskSlice";

export const Task: FC = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(tasksSelector);

    const handleClick = () => {
        dispatch(addTask({
            description: Math.random().toString(),
            id: tasks.length,
        } as ITask))
    }

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