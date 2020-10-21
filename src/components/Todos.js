import React from 'react'

export default function Todos(props) {
    return (
        <div>
            {props.todoList.map((todo, index) => {
                return <div key={index}>{todo.title}</div>
            })}
            <p></p>
        </div>
    )
}
