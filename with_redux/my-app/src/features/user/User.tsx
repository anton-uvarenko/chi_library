import React from "react";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../app/hooks";
import {logoutUser} from "./userSlice";

export const User: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(logoutUser());
    }
    return (
        <>
            <button onClick={handleClick}>Log out</button>
        </>
    )
}