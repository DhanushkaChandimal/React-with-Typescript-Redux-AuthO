import type React from "react";

type Task = {
    title: string;
    description: string;
    completed: boolean;
}

const TaskRenderer: React.FC = () =>{

    const tasks: Task[] = [];

    const task1: Task = {
        title: "task 1",
        description: "task 1 desc",
        completed: false
    }
    const task2: Task = {
        title: "task 2",
        description: "task 2 desc",
        completed: false
    }
    const task3: Task = {
        title: "task 3",
        description: "task 3 desc",
        completed: true
    }

    tasks.push(task1)
    tasks.push(task2)
    tasks.push(task3)

    return (
        <div>
            {
                tasks.map((task, index) => (
                    <div key={index}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Task status: {task.completed ? "completed" : "incomplete"}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TaskRenderer;