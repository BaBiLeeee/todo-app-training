import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos.todos
        const filter = state.todos.filter
        const searchTerm = state.todos.searchTerm
        
        return todos.filter((todo) => {
            const matchsFilter = (filter ==="COMPLETED" && todo.completed) || (filter ==="INCOMPLETE" &&
                !todo.completed) || (filter === "ALL");
                const matchsSearch = todo.text.toLowerCase().includes(searchTerm);
                return matchsFilter && matchsSearch
            })
        })
        console.log("filter", filteredTodos)
    return (
        <ul>
            <li className="my-2 text-sm italic">All note..</li>
            {
                filteredTodos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index}/>
                ))
            }
            
        </ul>
    )
}
export default TodoList