import { StrictMode, useState } from 'react'
import ReactDOM from 'react-dom'
import TaskCard from './TaskCard'
import taskData from './task-data.json'
import './styles.css'
import FilterInput from './FilterInput'
import AddTaskInput from './AddTaskInput'

function App() {
  const [tasks, setTasks] = useState(taskData)
  const [count, setCount] = useState(0)

  console.log(tasks)

  const updateCountHandler = (incOrDec) => {
    incOrDec === 'increment'
      ? setCount((prevState) => prevState + 1)
      : setCount((prevState) => prevState - 1)
  }

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((el) => el.id !== taskId))
  }

  return (
    <div className="layout">
      <div className="frame">
        <div className="frame-header">
          <h1>Tasks</h1>
          <span className="completed-count-text">{count} completed</span>
        </div>
        <FilterInput />
        <div className="frame-body">
          {tasks.map((entry, idx) => (
            <TaskCard
              key={idx}
              id={entry.id}
              name={entry.name}
              isFirstCard={idx === 0}
              updateCountHandler={updateCountHandler}
              deleteTaskHandler={deleteTaskHandler}
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
