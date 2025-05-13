import { useState } from "react";

import style from "./style.module.css"
const TodoInput = ({addTodo})=>{

    const [title, setInput] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(title)
        setInput("")
    }

    return <>
        <form className={style["todo-form"]} onSubmit={handleSubmit}>
            <input className={style["todo-input"]} type="text" value={title} onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <button className={style["todo-button"]} type="submit">Add</button>
        </form>  
    </>
}


export default TodoInput;