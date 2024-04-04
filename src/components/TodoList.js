import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList=()=>{
    const todos = useSelector((state)=>state.todos)
    return (
        <ul className="flex flex-col border border-grey-700 rounded-md p-2">
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
    )
}
export default TodoList;