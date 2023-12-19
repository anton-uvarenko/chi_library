import {Middleware} from "@reduxjs/toolkit";


export const loggerMiddleware: Middleware = storeApi => next => action => {
    // console.log("action type", action.type, "action", action);
    next(action);
}