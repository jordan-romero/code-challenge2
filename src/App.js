import { StrictMode, useState } from 'react'
import ReactDOM from 'react-dom'
import TaskCard from './TaskCard'
import taskData from './task-data.json'
import './styles.css'
import FilterInput from './FilterInput'
import AddTaskInput from './AddTaskInput'

function App() {
  const [tasks, setTasks] = useState(taskData)

  return (
    <div className="layout">
      <div className="frame">
        <div className="frame-header">
          <h1>Tasks</h1>
          <span className="completed-count-text">0 completed</span>
        </div>
        <FilterInput />
        <div className="frame-body">
          {tasks.map((entry, idx) => (
            <TaskCard
              key={idx}
              name={entry.name}
              isFirstCard={idx === 0}
            ></TaskCard>
          ))}
          <AddTaskInput />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
