import React, {FC, useContext, useEffect, useRef, useState} from "react";

const context = React.createContext<string>("red");
const Lesson: FC = () => {
    const [inputData, setInputData] = useState("");
    const color = useContext(context);

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log(inputData);
    }, [inputData]);

    useEffect(() => {
        console.log("component did mount");
        return(
            console.log("component did unmount")
        )
    }, [])

    return (
        <>
            <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)}/>
            <p style={{
                color: color,
            }}>{inputData}</p>

            <input ref={ref}/>
            <button onClick={(e) => {
                ref?.current?.focus();
            }}>click me</button>
        </>
    )
}

export default Lesson;