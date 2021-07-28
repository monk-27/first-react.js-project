import React from 'react'
import {TodoItem} from "../my components/TodoItem";


export const Todos = (props) => {
    let mystyle = {
        minHeight: "70vh",
        margin: "100px auto"
    }
    return (
        <div className = "container my-3" style={mystyle}>
            <h3 className="my-3">Todos List</h3>
             {props.todos.length===0? "no todos to diplay":
             props.todos.map((todo)=>{
             return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
             )
             })
             
             }
            
             
        </div>
    )
}
