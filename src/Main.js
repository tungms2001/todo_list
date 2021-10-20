import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const Main = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //Run once when the app start
    useEffect(() => {
        getLocalTodos();
    }, []);

    //Functions
    //Use Effect
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filterHandler = () => {
        switch (status){
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };
    //Save to Local
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
    const getLocalTodos =() => {
        if(localStorage.getItem("todos") ===null){
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };

    return (
        <div className="App">
            <div className="proFile">
                <Link to="/profile">Profile</Link>
            </div>
            <header>
                <h1>ST Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus = {setStatus}
            />
            <TodoList
                filteredTodos={filteredTodos}
                setTodos={setTodos}
                todos={todos}/>
        </div>
    );
}

export default Main;