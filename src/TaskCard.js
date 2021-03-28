import { useState } from 'react'
import { mdiCheckBold, mdiDeleteForever } from '@mdi/js'
import Icon from '@mdi/react'

export default function TaskCard({
  name,
  id,
  isFirstCard,
  updateCountHandler,
  deleteTaskHandler
}) {
  const [isCompleted, setIsCompleted] = useState(false)

  const onClickHandler = () => {
    setIsCompleted(!isCompleted)
    isCompleted !== true
      ? updateCountHandler('increment')
      : updateCountHandler('decrement')
  }

  return (
    <div
      className="task-card"
      style={!isFirstCard ? { borderTop: 'none' } : {}}
    >
      <span
        className="task-card-text"
        style={
          isCompleted
            ? {
                textDecoration: 'line-through'
              }
            : {}
        }
      >
        {name}
      </span>
      <div className="task-check-icon-container">
        <Icon
          path={mdiCheckBold}
          onClick={onClickHandler}
          className="icon"
          style={{
            color: isCompleted ? '#fab397' : 'rgba(31, 31, 31, 0.1)'
          }}
        />
        <Icon
          path={mdiDeleteForever}
          onClick={() => deleteTaskHandler(id)}
          className="icon"
          color="rgba(31, 31, 31, 0.1)"
        />
      </div>
    </div>
  )
}
