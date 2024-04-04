import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";
const TodoItem=({id, title, completed})=>{
    const dispatch = useDispatch();
    const handleComplete = () => {
        dispatch(toggleTodo({id: id, completed: !completed}))
    }
    const handleDeleteClick = () => {
        dispatch(deleteTodo({id:id}))
    }
    return (
        <li className="w-80 p-2">
            <div className="flex flex-row justify-between">
                <span>
                    <input
                        className="mr-2"
                        type='checkbox'
                        checked={completed}
                        onClick={handleComplete}
                        ></input>
                        {title}
                </span>
                    <button onClick={handleDeleteClick} className="bg-red-700 text-white px-2 py-1 rounded-md">
                        Delete
                    </button>
                </div>
            </li>
    )
}
export default TodoItem;