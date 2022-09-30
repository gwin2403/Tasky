import React from 'react'
import './Task.css'
export default function Task(props) {
  return (
    <div>
      <div className={`${props.active ? "task-bg" : "task-bg-new"}`}>
        <div className="task-01">
          <span className="material-symbols-outlined">add</span>
          <input type="text" placeholder="Enter your task..."></input>
        </div>
      </div>
    </div>
  );
}