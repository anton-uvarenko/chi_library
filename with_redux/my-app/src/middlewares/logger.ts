export const loggerMiddleware = (sotre: any) => (next: any) => (action: any) => {
    console.log("action type", action.type, "action", action);
    next(action);
}