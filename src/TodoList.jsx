import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No todo"}
            {todos.map((todo) => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                );
            })}
        </ul>
    );
}

// PropTypes validation
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};