import { useState } from "react";
import TodoInput from "../TodoInput";
import TodoItem from "../TodoItem";
import style from "./style.module.css"
const TodoApp = () =>{
    const [todos, setTodos] = useState([])
    const addTodo = (title) => {
        setTodos([...todos, { title, completed: false }])
    }

    const toggleTodo = (idx) => {
        const newTodos = [...todos]
        newTodos[idx].completed = !newTodos[idx].completed
        setTodos(newTodos)
    }

    const deleteTodo = (idx) => {
        const newTodos = [...todos]
        newTodos.splice(idx, 1)
        setTodos(newTodos)
    }

    return (
        <>
    <div className={style["parent"]}>

    <TodoInput addTodo={addTodo} />

    <table className={style["todo-table"]}>
        <thead>
        <tr>
            <th>No.</th>
            <th>Task Title</th>
            <th>Done</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {todos.map((todo, idx) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            index={idx}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        ))}
        </tbody>
    </table>
    </div>


        </>
)

}

export default TodoApp