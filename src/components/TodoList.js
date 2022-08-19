import { useState } from "react";
import ToDoItem from "./ToDoItem";
import {Divider, Card, Input, Button, Icon} from 'agnostic-react'

const SaveIcon = () => (
<svg className="svg-icon" viewBox="0 0 20 20">
    <path d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"></path>
</svg>
)

export default function TodoList() {

    const [todos, setTodos] = useState([])
    const [taskError, setTaskError] = useState("")

    function removeTodo(id) {
        setTodos(todos.filter( t => t.id != id))
    }

    function addToDo(evt) {
        evt.preventDefault()
        console.log(evt)

        let input = evt.target.getElementsByTagName("input").item(0)
        let value = input.value
        
        if(value.trim() == "") {
            return setTaskError("Can't create empty task")
        } else {
            setTaskError("")
        }

        setTodos([...todos, {
            text: value,
            id: todos.length + 1
        }])
        input.value = ""
    }

    return (
        <section  id="main-section">
        <Card isBorder isShadow >
            <div className="w-100">
                <h1 className="p16">[REACT] Agnostic To-Do app</h1>
                <form onSubmit={addToDo}  className="p32">
                    <section className="p8">
                    <Input
                        id="standard-basic" 
                        label="New Task" 
                        type="text" 
                        isInvalid={taskError.length != 0}
                        invalidText={taskError}
                    />
                    </section>
                    <Button  type="submit" id="save-task-btn" >
                        Save task
                        <Icon>
                            <SaveIcon />
                        </Icon>
                    </Button>
                </form>
                <Divider ></Divider>
                <div className="w-100 flex-column p16" >
                    {todos && todos.map( t => <ToDoItem item={t} itemRemover={removeTodo} key={t.id}/>)} 
                </div>
                <Card >
                    <h2 className="p32">Total pending tasks: {todos.length}</h2>
                </Card>
            </div>
        </Card> 
        </section>
    )
}