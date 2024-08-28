
import React from "react";

export const List = ({list, saveTime, value, deleteTime}) => {
    return(
        <div>
            <button onClick={() => saveTime(value)}>save</button>
            <ul>
            {list.map((time, index) => (

                <li key={index} onClick={() => deleteTime(index)}>{time}</li>

            ))}
            </ul>
        </div>
    )
}