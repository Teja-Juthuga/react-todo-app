import { useState } from "react";

export function TodoList({tasksList}){
    <div className="container">
      <ul>
        {
            tasksList.map((eachTask) => 
                <li key={eachTask}> {eachTask} </li>    
            )
        }
      </ul>
    </div>
} 