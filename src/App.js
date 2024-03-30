import { useState } from "react";
import { TodoForm } from "./components/todo-form";
import "./App.css";

function App() {
    return (
        <div className="container-fluid" style={{ height: "100vh" }}>
          <TodoForm />
        </div>
    );
}

export default App;
