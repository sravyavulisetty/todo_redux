import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
const AddTodoForm =()=>{
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const onSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo({
            title: value
        }))
    }
    return (
        <form onSubmit={onSubmit} className="flex flex-col items-start m-6">
			<input
                className="border border-grey-700 rounded-md p-1"
				type='text'
				placeholder='Add todo'
				value={value}
				onChange={(event) => setValue(event.target.value)}>
                </input>
			<button type='submit' className="mt-4 bg-blue-500 text-white text-lg font-medium px-3 py-1 rounded-md">
				Submit
			</button>
		</form>
    )
}
export default AddTodoForm;