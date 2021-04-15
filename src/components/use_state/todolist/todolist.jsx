import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,

};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
    onViewClick: null
}

function TodoList(props) {
    const { todos, onTodoClick, onViewClick } = props;

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    function handleView(todo) {
        if (onViewClick) {
            onViewClick(todo);
        }
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} >
                    <div className='todo-item'>
                        <div><label>{todo.id}</label></div>
                        <div><label>{todo.title}</label></div>
                        <div><label>{todo.name}</label></div>
                        <div><label>{todo.age}</label></div>
                        <div className="view-style" onClick={() => handleView(todo)}>View</div>
                        <div className="link-style" onClick={() => handleClick(todo)}>Delete</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;