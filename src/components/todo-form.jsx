import { useState } from "react";
import { TodoList } from "./todo-list";

export function TodoForm() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const handleInput = (e) => {
        setTask(e.target.value);
    };

    const addTask = (e) => {
        setTodos([...todos, task]);
        setTask("");
    };

    return (
        <div>
            <div className="d-flex justify-content-center ">
                <div className="card mt-4 p-4 shadow">
                    <h2> Todo Application </h2>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleInput}
                            value={task}
                        />
                        <div className="d-flex justify-content-end">
                            <button
                                className="btn btn-success mt-3"
                                onClick={(e) => {
                                    addTask(e);
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TodoList tasksList={todos} />
            </div>
        </div>
    );
}
