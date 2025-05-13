

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
    return (
        <tr>
        <td>{index + 1}</td>
        <td style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} > {todo.title}
        </td>
        <td><button onClick={() => toggleTodo(index)} style={{ backgroundColor: "lightgreen", cursor: "pointer" }}>Done</button></td>
        <td><button onClick={() => deleteTodo(index)} style={{ color: "red", cursor: "pointer" }}>Delete</button></td>
        </tr>
    );
};

export default TodoItem;
